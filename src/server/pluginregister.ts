import { FastifyApplication, IRegisterToFastify, TEnvVariables } from '@/types';
import Plugin from './plugin';

export default class PluginRegister implements IRegisterToFastify {
	protected plugins: Array<Plugin> = [];

	constructor(...args: Array<Plugin>) {
		this.plugins = args;
	}

	register(app: FastifyApplication, env: TEnvVariables): void {
		this.plugins.forEach(plugin => plugin.register(app, env));
	}
}
