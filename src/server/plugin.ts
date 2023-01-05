import { FastifyApplication, IRegisterToFastify, TEnvVariables } from '@/types';

export default abstract class Plugin implements IRegisterToFastify {
	abstract register(app: FastifyApplication, env: TEnvVariables): void;
}
