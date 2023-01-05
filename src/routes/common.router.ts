import RouteGroup from '@/server/routegroup';
import { FastifyApplication } from '@/types';

class CommonRouter extends RouteGroup {
	apply(app: FastifyApplication): void {
		app.get('/status', (request, reply) => {
			reply.send({
				running: true,
			});
		});
	}
}

export default new CommonRouter();
