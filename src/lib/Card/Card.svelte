<script lang="ts">
	import type { CardShadowType, RadiusType } from '$lib/types';
	import type { Action } from 'svelte/action';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { radiusStyles, shadowStyles } from './Card';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		shadow?: CardShadowType;
		radius?: RadiusType;
		isBlurred?: boolean;
		isFooterBlurred?: boolean;
		isDisabled?: boolean;
		className?: string;
		headerClass?: string;
		footerClass?: string;
		action?: Action;
	};

	export let shadow: CardShadowType = 'md';
	export let radius: RadiusType = 'md';
	export let isBlurred: boolean = false;
	export let isFooterBlurred: boolean = false;
	export let isDisabled: boolean = false;
	export let className: string = '';
	export let mainClass: string = '';
	export let headerClass: string = '';
	export let footerClass: string = '';

	const divClass = twMerge(
		'flex flex-col overflow-hidden h-auto outline-none text-black dark:text-white',
		shadowStyles[shadow],
		radiusStyles[radius],
		isBlurred
			? 'bg-white/80 dark:bg-black/20 backdrop-filter backdrop-blur-md backdrop-saturate-150'
			: '',
		isDisabled ? 'opacity-50 pointer-events-none' : '',
		className
	);
	let _mainClass = twMerge(
		'flex flex-1 w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto text-left subpixel-antialiased',
		mainClass
	);
	let _headerClass: string;
	let _footerClass: string;

	if ($$slots.header) {
		_headerClass = twMerge(
			'p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased',
			headerClass
		);
	}
	if ($$slots.footer) {
		_footerClass = twMerge(
			'p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased',
			isFooterBlurred
				? 'bg-white/80 dark:bg-black/20 backdrop-filter backdrop-blur backdrop-saturate-150'
				: '',
			footerClass
		);
	}
</script>

<div class={divClass} {...$$restProps}>
	{#if $$slots.header}
		<div class={_headerClass}>
			<slot name="header" />
		</div>
	{/if}
	<div class={_mainClass}>
		<slot />
	</div>
	{#if $$slots.footer}
		<div class={_footerClass}>
			<slot name="footer" />
		</div>
	{/if}
</div>
