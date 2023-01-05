import { FastifyApplication, IApplyToFastify, TEnvVariables } from '@/types';

export default abstract class RouteGroup implements IApplyToFastify {
	abstract apply(app: FastifyApplication, env: TEnvVariables): void;
}
