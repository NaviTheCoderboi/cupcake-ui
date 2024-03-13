<script lang="ts">
	import type { BadgePlacementType, BadgeShapeType, ColorsType, SizeType } from '$lib/types';
	import { quintInOut } from 'svelte/easing';
	import type { HTMLAttributes } from 'svelte/elements';
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { PlacementStyles, colorStyles, offsetStyles, sizeStyles } from './Badge';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		content?: string;
		color?: ColorsType;
		size?: SizeType;
		placement?: BadgePlacementType;
		showOutline?: boolean;
		isInvisible?: boolean;
		badgeClass?: string;
		className?: string;
		isOneChar?: boolean;
		label?: string;
		shape?: BadgeShapeType;
	};

	export let label: string = 'Badge';
	export let content: string = '';
	export let color: ColorsType = 'primary';
	export let size: SizeType = 'md';
	export let placement: BadgePlacementType = 'top-right';
	export let showOutline: boolean = true;
	export let isInvisible: boolean = false;
	export let badgeClass: string = '';
	export let className: string = '';
	export let isOneChar: boolean = false;
	export let shape: BadgeShapeType = 'rectangle';

	const div2Class = twMerge(
		sizeStyles(size, isOneChar),
		colorStyles[color],
		PlacementStyles(placement, shape),
		offsetStyles[placement],
		showOutline ? 'border-2 border-white dark:border-black' : '',
		'absolute flex justify-center items-center rounded-full z-10 box-border',
		badgeClass
	);

	const div1Class = twMerge('relative inline-flex shrink-0', className);
</script>

<div class={div1Class} {...$$restProps} aria-label={label} aria-hidden={isInvisible}>
	{#if !isInvisible}
		<div
			class={div2Class}
			transition:scale={{ duration: 400, easing: quintInOut }}
			aria-live="polite"
			on:*
		>
			{#if $$slots.content}
				<slot name="content" />
			{:else}
				{content}
			{/if}
		</div>
	{/if}
	<slot />
</div>
