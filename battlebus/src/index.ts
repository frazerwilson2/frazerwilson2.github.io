import { runSchedule } from '../battles';
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const doThing = async () => {
	// console.log(JSON.stringify(runSchedule()));
	await fetch('http://localhost:55382/battlebus', {
		method: 'POST',
		body: JSON.stringify(runSchedule()),
	});
};

export default {
	async scheduled(event, env, ctx) {
		ctx.waitUntil(doThing());
	},
} satisfies ExportedHandler<Env>;
