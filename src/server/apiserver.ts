import fastify from 'fastify';

import {
	FastifyApplication,
	IApiServer,
	IHttpServer,
	TEnvVariables,
} from '@/types';
import { ENVIRONMENT, HOST, NAME, PORT, VERSION } from './config';
import PluginRegister from './pluginregister';
import Router from './router';
import HttpServer from './httpserver';

export default class ApiServer implements IApiServer {
	app: FastifyApplication;

	router: Router;

	pluginRegister: PluginRegister;

	env: TEnvVariables;

	constructor(options: { router: Router; pluginRegister: PluginRegister }) {
		this.env = {
			name: NAME ?? 'api-server',
			version: VERSION ?? '0.1.0',
			port: parseInt(PORT ?? '80', 10),
			host: HOST ?? '0.0.0.0',
			environment: ENVIRONMENT as 'development' | 'production' | 'test',
		};

		this.app = fastify({
			logger: true,
			trustProxy: true,
		});

		this.router = options.router;
		this.pluginRegister = options.pluginRegister;
	}

	public async bootstrap(): Promise<IHttpServer> {
		await this.init();
		return new HttpServer(this);
	}

	protected async init(): Promise<void> {
		// Plugins
		this.pluginRegister.register(this.app, this.env);

		// Routes
		this.router.apply(this.app, this.env);

		// Captura rotas inexistentes
		this.app.setNotFoundHandler((request, reply) => {
			reply.status(404).send({
				status: 404,
				name: 'NaoEncontrado',
				message: 'O recurso que você está procurando não foi encontrado.',
			});
		});

		// Captura qualquer erro da aplicação
		this.app.setErrorHandler((error, request, reply) => {
			const {
				name = 'ErroDesconhecido',
				message = 'O erro produzido é deconhecido',
			} = error;

			this.app.log.error(error);

			reply.status(parseInt(error.code ?? '500', 10)).send({
				status: error.code ?? 500,
				name,
				message,
			});
		});
	}
}
