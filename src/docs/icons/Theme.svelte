<script lang="ts">
	import Monitor from 'lucide-svelte/icons/monitor';
	import Moon from 'lucide-svelte/icons/moon';
	import Sun from 'lucide-svelte/icons/sun';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<SVGElement> & {
		theme: 'light' | 'dark' | 'system';
	};

	export let theme: 'light' | 'dark' | 'system' = 'light';

	$: component = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;
</script>

<svelte:component this={component} {...$$restProps} />
