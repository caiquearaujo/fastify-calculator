import http from 'http';
import {
	FastifyBaseLogger,
	FastifyInstance,
	FastifyTypeProviderDefault,
} from 'fastify';

export type TReducer<T = number> = (prev: T, curr: T) => T;
export type TFnReduce<T = number> = (fn: TReducer<T>, args: T[]) => T;
export type TFnOperation<T = number> = (args: T[]) => T;

export interface IPublicCalculator<T = number> {
	perform(name: string, ...args: T[]): T;
	available(): string[];
}

export interface IPrivateCalculator<T = number> extends IPublicCalculator<T> {
	register(name: string, fn: TFnOperation<T>): void;
}

export interface IApplyToFastify {
	apply(app: FastifyApplication, env: TEnvVariables): void;
}

export interface IRegisterToFastify {
	register(app: FastifyApplication, env: TEnvVariables): void;
}

export interface IApiServer {
	app: FastifyApplication;
	router: IApplyToFastify;
	pluginRegister: IRegisterToFastify;
	env: TEnvVariables;

	bootstrap(): Promise<void>;
}

export type TEnvVariables = {
	name: string;
	version: string;
	port: number;
	host: string;
	environment: 'test' | 'development' | 'production';
};

export type FastifyApplication = FastifyInstance<
	http.Server,
	http.IncomingMessage,
	http.ServerResponse,
	FastifyBaseLogger,
	FastifyTypeProviderDefault
> &
	PromiseLike<
		FastifyInstance<
			http.Server,
			http.IncomingMessage,
			http.ServerResponse,
			FastifyBaseLogger,
			FastifyTypeProviderDefault
		>
	>;
