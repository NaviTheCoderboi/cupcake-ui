<script lang="ts">
	import type { AccordianCtxType, TransitionParamTypes, TransitionTypes } from '$lib/types';
	import { getContext, onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { writable } from 'svelte/store';
	import type { BlurParams, FadeParams, FlyParams, SlideParams } from 'svelte/transition';
	import { blur, fade, fly, slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	let accordian: AccordianCtxType = getContext('accordian');
	let accordianID = crypto.randomUUID();

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		isDisabled?: boolean;
		open?: boolean;
		activeClass?: string;
		inactiveClass?: string;
		transitionType?: TransitionTypes;
		transitionParams?: TransitionParamTypes;
		className?: string;
	};

	export let isDisabled: boolean = accordian?.isDisabled || false;
	export let open: boolean = false;
	export let activeClass: string = '';
	export let inactiveClass: string = '';
	export let transitionType: TransitionTypes = accordian?.transitionType || 'slide';
	export let transitionParams: TransitionParamTypes = accordian?.transitionParams || {};
	export let className: string = '';

	let self = {};
	let selected = accordian?.selected ?? writable();

	let _open = open;
	open = false;

	onMount(() => {
		if (_open) {
			$selected = self;
		}
		return selected.subscribe((x) => (open = x === self));
	});

	const toggle = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => {
		if (isDisabled) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		selected.set(open ? {} : self);
	};

	type TransitionParams<T> = T extends 'blur'
		? BlurParams
		: T extends 'fly'
			? FlyParams
			: T extends 'fade'
				? FadeParams
				: T extends 'slide'
					? SlideParams
					: never;

	const multiple = <T extends 'blur' | 'fly' | 'fade' | 'slide'>(
		node: HTMLElement,
		params: TransitionParams<T>
	) => {
		switch (transitionType) {
			case 'blur':
				return blur(node, params);
			case 'fly':
				return fly(node, params);
			case 'fade':
				return fade(node, params);
			case 'slide':
				return slide(node, params);
			default:
				return slide(node, params);
		}
	};

	let buttonClass = twMerge(
		'flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl group-last:rounded-b-xl p-3',
		open ? activeClass : inactiveClass,
		isDisabled ? 'pointer-events-none opacity-50' : ''
	);

	let variantStyles =
		accordian?.variant === 'split' ? 'bg-white shadow-2xl dark:bg-black rounded-xl' : '';
</script>

<div class={twMerge(variantStyles, 'flex w-full flex-col', className)}>
	<h2 class="group w-full">
		<button
			on:click={toggle}
			type="button"
			class={buttonClass}
			aria-expanded={open}
			aria-controls="accordian-{accordianID}"
			aria-disabled={isDisabled}
		>
			{#if $$slots.header && !$$slots.subheader}
				<slot name="header" />
			{:else}
				<div class="flex flex-col justify-center gap-1">
					<slot name="header" />
					<slot name="subheader" />
				</div>
			{/if}
			{#if open && $$slots.iconup}
				<slot name="iconup" />
			{:else if $$slots.iconup}
				<slot name="icondown" />
			{:else}
				<svg
					class="h-3 w-3 text-gray-800 duration-300 dark:text-white {open
						? ''
						: 'rotate-180'}"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			{/if}
		</button>
	</h2>
	{#if open}
		<div transition:multiple={transitionParams}>
			<div class="p-3">
				<slot />
			</div>
		</div>
	{:else}
		<div class="hidden">
			<div class="p-3">
				<slot />
			</div>
		</div>
	{/if}
</div>
