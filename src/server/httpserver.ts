import { IApiServer, IHttpServer } from '@/types';

export default class HttpServer implements IHttpServer {
	api: IApiServer;

	running = false;

	constructor(api: IApiServer) {
		this.api = api;
	}

	public async start() {
		this.running = await this.listen();
		return this.running;
	}

	public async restart() {
		await this.stop();
		await this.start();
		return this.running;
	}

	public async stop() {
		console.log('Stopping server');

		const response = await new Promise<boolean>((res, rej) => {
			if (!this.isRunning()) res(true);

			this.api.app
				.close()
				.then(
					() => {
						console.log(
							'⚡️[server]: O servidor foi fechado com sucesso'
						);
						res(true);
					},
					err => {
						console.error(
							'⚡️[server]: Um erro aconteceu ao fechar o servidor',
							err
						);
						rej(err);
					}
				)
				.catch(err => {
					console.error(
						'⚡️[server]: Um erro aconteceu ao fechar o servidor',
						err
					);
					rej(err);
				});
		});

		this.running = !response;
		return this.running;
	}

	public isRunning(): boolean {
		return this.running;
	}

	protected listen(): Promise<boolean> {
		if (this.isRunning()) {
			console.error('⚡️[server]: O servidor já está rodando');
			return new Promise(res => {
				res(false);
			});
		}

		return new Promise((res, rej) => {
			this.api.app.listen(
				{ port: this.api.env.port, host: this.api.env.host },
				(err, address) => {
					if (err) {
						// Should notify administrators
						this.api.app.log.error(err);
						rej(err);
					}

					console.log(
						`⚡️[server]: O servidor está rodando em ${address}`
					);
					res(true);
				}
			);
		});
	}
}
