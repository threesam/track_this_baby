<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Event } from '$lib/utils/sanity';
	import {client} from '$lib/utils/sanity'

	$: count = ''

	async function countEvent(slug: string) {
		const countRes = await fetch(`/worker?event=${slug}`, {method: 'POST'})
		const text = await countRes.text()

		count = text
	}

	export let event: Event;
</script>

<div class="card">
	<!-- {#if event.mainImage}
		<img
			class="card__cover"
			src={urlFor(event.mainImage).width(500).height(300).url()}
			alt="Cover image for {event.title}"
		/>
	{:else}
		<div class="card__cover--none" />
	{/if} -->

	<div class="card__container">
		<h3 class="card__title">
			<button class="card__link" on:click={() => countEvent(event.slug.current)}>
				{event.title} - {count}
			</button>
		</h3>
	</div>
</div>