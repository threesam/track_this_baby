<script lang="ts">
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.events.length}
		{#each data.events as event}
			<Card {event} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
