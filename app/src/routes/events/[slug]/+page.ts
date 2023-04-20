import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getEvent } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const event = await getEvent(params.slug);
	if (event) return event;

	throw error(404, 'Not found');
}) satisfies PageLoad;
