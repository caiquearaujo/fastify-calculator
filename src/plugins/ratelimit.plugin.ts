import fastifyRateLimit from '@fastify/rate-limit';
import Plugin from '@/server/plugin';
import { FastifyApplication } from '@/types';

class RateLimitPlugin extends Plugin {
	register(app: FastifyApplication): void {
		app.register(fastifyRateLimit, {
			max: 100,
			timeWindow: '1 minute',
		});
	}
}

export default new RateLimitPlugin();
