import fastifyHelmet from '@fastify/helmet';
import Plugin from '@/server/plugin';
import { FastifyApplication } from '@/types';

class HelmetPlugin extends Plugin {
	register(app: FastifyApplication): void {
		app.register(fastifyHelmet);
	}
}

export default new HelmetPlugin();
