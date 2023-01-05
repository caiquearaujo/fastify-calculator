import ApiServer from '@/server/apiserver';
import Router from '@/server/router';
import commonRouter from '@/routes/common.router';
import PluginRegister from '@/server/pluginregister';
import helmetPlugin from '@/plugins/helmet.plugin';
import ratelimitPlugin from '@/plugins/ratelimit.plugin';
import compressPlugin from '@/plugins/compress.plugin';

const options = {
	router: new Router(commonRouter),
	pluginRegister: new PluginRegister(
		helmetPlugin,
		ratelimitPlugin,
		compressPlugin
	),
};

new ApiServer(options)
	.bootstrap()
	.then(server => {
		server
			.start()
			.then(() => console.log(`⚡️ Servidor está pronto.`))
			.catch(err => {
				console.error('❌ Servidor falhou ao iniciar...');
				console.error(err);
				process.exit(1);
			});
	})
	.catch(err => {
		console.error('❌ Servidor falhou ao iniciar...');
		console.error(err);
		process.exit(1);
	});
