import { FastifyApplication, IApplyToFastify, TEnvVariables } from '@/types';
import RouteGroup from './routegroup';

export default class Router implements IApplyToFastify {
	protected routes: Array<RouteGroup> = [];

	constructor(...args: Array<RouteGroup>) {
		this.routes = args;
	}

	apply(app: FastifyApplication, env: TEnvVariables): void {
		this.routes.forEach(router => router.apply(app, env));
	}
}
