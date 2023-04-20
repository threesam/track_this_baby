export interface Env {
	EVENTS: KVNamespace;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const currentTimeStamp = Date.now()
		const {searchParams} = new URL(request.url)
		const eventHandle = searchParams.get('event')

		if (request.method === 'POST') {
			if(eventHandle) {
				const event = await env.EVENTS.get(eventHandle)

				let data
				if (!event) {
					data = `${currentTimeStamp}`
				} else {
					data = `${event}|${currentTimeStamp}`
				}
	
				await env.EVENTS.put(eventHandle, data)
		
				return new Response(data)
			}
		}
	
		if (request.method === 'GET') {
			if(eventHandle) {
				const event = await env.EVENTS.get(eventHandle)

				return new Response(event)
			}
		}

		return new Response("Must include event");
	},
};
