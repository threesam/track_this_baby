export async function GET({ url }) {
	const { searchParams } = new URL(url);
	const slug = searchParams.get('event');
	console.log('slug', slug);
	const countRes = await fetch(`https://track_this_baby.threesam.workers.dev?event=${slug}`);
	const text = await countRes.text();
	console.log('text', text);

	return new Response(text);
}

export async function POST({ url }) {
	const { searchParams } = new URL(url);
	const slug = searchParams.get('event');
	console.log('slug', slug);
	const countRes = await fetch(`https://track_this_baby.threesam.workers.dev?event=${slug}`, {
		method: 'POST'
	});
	const text = await countRes.text();
	console.log('text', text);

	return new Response(text);
}
