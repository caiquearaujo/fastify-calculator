import fastifyCompress from '@fastify/compress';
import Plugin from '@/server/plugin';
import { FastifyApplication } from '@/types';

class CompressPlugin extends Plugin {
	register(app: FastifyApplication): void {
		app.register(fastifyCompress, { global: true });
	}
}

export default new CompressPlugin();
