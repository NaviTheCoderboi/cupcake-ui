<script lang="ts">
	import type { ColorsType, RadiusType, SizeType } from '$lib/types';
	import { getContext } from 'svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { backgroundStyles, borderStyles, radiusStyles, sizeStyles } from './Avatar';

	const avatarGroup:
		| {
				color: ColorsType;
				radius: RadiusType;
				size: SizeType;
				isBordered: boolean;
				isDisabled: boolean;
		  }
		| undefined = getContext('avatarGroup');

	type $$Props = HTMLImgAttributes & {
		src?: string;
		color?: ColorsType;
		radius?: RadiusType;
		size?: SizeType;
		isBordered?: boolean;
		isDisabled?: boolean;
		showFallback?: boolean;
		href?: string;
		className?: string;
		alt?: string;
	};

	export let src: string | undefined = undefined;
	export let color: ColorsType = avatarGroup?.color || 'primary';
	export let radius: RadiusType = avatarGroup?.radius || 'full';
	export let size: SizeType = avatarGroup?.size || 'md';
	export let isBordered: boolean = avatarGroup?.isBordered || false;
	export let isDisabled: boolean = avatarGroup?.isDisabled || false;
	export let showFallback: boolean = false;
	export let className: string = '';
	export let href: string | undefined = undefined;
	export let alt: string | undefined = undefined;

	let img: HTMLImageElement | null = null;

	const avatarClass = twMerge(
		radiusStyles[radius],
		isBordered ? borderStyles[color] : '',
		sizeStyles[size],
		backgroundStyles[color],
		isDisabled ? 'opacity-50 pointer-events-none' : '',
		avatarGroup && '-mr-2 hover:-translate-x-4 z-0',
		'transition-all duration-300 overflow-hidden',
		className
	);

	$: {
		if (img && img.complete) {
			showFallback = !img.naturalWidth;
		} else if (img) {
			showFallback = true;
		}
	}

	const refresh = () => {
		showFallback = false;
	};
</script>

{#if !src || !!href || $$slots.default}
	<svelte:element
		this={href ? 'a' : 'div'}
		{href}
		{...$$restProps}
		class="relative flex items-center justify-center {avatarClass}"
		on:*
	>
		{#if showFallback}
			<slot name="fallback" {refresh} />
		{:else if src}
			<img {src} {alt} bind:this={img} />
		{:else if $$slots.default}
			<slot />
		{:else}
			<svg
				class="h-full w-full"
				fill="currentColor"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
					clip-rule="evenodd"
				/>
			</svg>
		{/if}
	</svelte:element>
{:else if showFallback}
	<div class={twMerge(avatarClass, 'flex items-center justify-center')}>
		<slot name="fallback" {refresh} />
	</div>
{:else}
	<img {src} {alt} class={avatarClass} bind:this={img} on:* />
{/if}
