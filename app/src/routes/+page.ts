import { getEvents } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const events = await getEvents();

	if (events) {
		return {
			events
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
