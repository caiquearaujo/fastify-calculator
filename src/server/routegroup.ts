import { FastifyApplication, TEnvVariables } from '@/types';

export default abstract class RouteGroup {
	abstract apply(app: FastifyApplication, env: TEnvVariables): void;
}
