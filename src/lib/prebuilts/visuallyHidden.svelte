<script lang="ts">
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';

	let forceShow = false;

	if (dev) {
		const shortcut = 'Alt';
		const handleKeyDown = (ev: KeyboardEvent) => {
			if (ev.key === shortcut) {
				forceShow = true;
			}
		};
		const handleKeyUp = (ev: KeyboardEvent) => {
			if (ev.key === shortcut) {
				forceShow = false;
			}
		};

		onMount(() => {
			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);

			return () => {
				window.removeEventListener('keydown', handleKeyDown);
				window.removeEventListener('keyup', handleKeyUp);
			};
		});
	}
</script>

{#if forceShow}
	<slot />
{:else}
	<span {...$$restProps}>
		<slot />
	</span>
{/if}

<style>
	span {
		display: inline-block;
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 1px;
		width: 1px;
		margin: -1px;
		padding: 0;
		border: 0;
	}
</style>
