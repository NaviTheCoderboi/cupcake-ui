<script lang="ts">
	import type {
		ButtonCtxType,
		ButtonVariantsType,
		ColorsType,
		RadiusType,
		SizeType
	} from '$lib/types';
	import { getContext } from 'svelte';
	import { ripple } from 'svelte-ripple-action';
	import 'svelte-ripple-action/ripple.css';
	import type { Action } from 'svelte/action';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import Spinner from '../prebuilts/spinner.svelte';
	import {
		buttonGroupRadiusStyles,
		iconStyles,
		radiusStyles,
		sizeStyles,
		variantStyles
	} from './Button';

	const buttonGroup: ButtonCtxType = getContext('buttonCtx');

	type $$Props = HTMLButtonAttributes & {
		color?: ColorsType;
		size?: SizeType;
		isDisabled?: boolean;
		variant?: ButtonVariantsType;
		radius?: RadiusType;
		type?: HTMLButtonAttributes['type'];
		className?: string;
		isIconOnly?: boolean;
		isLoading?: boolean;
		spinnerPosition?: 'left' | 'right';
		href?: string;
		target?: string;
		tag?: string;
		sAction?: Action;
	};

	export let color: ColorsType = buttonGroup?.color || 'primary';
	export let size: SizeType = buttonGroup?.size || 'md';
	export let isDisabled: boolean = buttonGroup?.disabled || false;
	export let variant: ButtonVariantsType = buttonGroup?.variant || 'solid';
	export let radius: RadiusType = buttonGroup ? 'none' : 'md';
	export let type: HTMLButtonAttributes['type'] = 'button';
	export let className: string = '';
	export let isIconOnly: boolean = false;
	export let isLoading: boolean = false;
	export let spinnerPosition: 'left' | 'right' = 'left';
	export let href: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let tag: string = 'button';
	export let sAction: Action<HTMLElement, any> = ripple;

	const buttonClass: string = twMerge(
		variantStyles(variant, color),
		'text-center font-medium inline-flex justify-center items-center gap-2',
		isIconOnly ? iconStyles(size) : sizeStyles[size],
		isDisabled && 'cursor-not-allowed opacity-50',
		buttonGroup?.radius ? buttonGroupRadiusStyles[buttonGroup?.radius] : radiusStyles[radius],
		isLoading && 'opacity-50 pointer-events-none',
		'transition-all duration-300 ease-in-out overflow-hidden relative scale-100 active:scale-95',
		className
	);
</script>

{#if href}
	<a
		{href}
		{target}
		{...$$restProps}
		role="button"
		class={buttonClass}
		aria-disabled={isDisabled}
		on:click={(e) => {
			if (isDisabled) {
				e.preventDefault();
				e.stopPropagation();
			}
		}}
		use:sAction
		on:*
	>
		{#if isLoading}
			{#if spinnerPosition === 'left'}
				<slot name="spinner">
					<Spinner />
				</slot>
			{/if}
			<slot />
			{#if spinnerPosition === 'right'}
				<slot name="spinner">
					<Spinner />
				</slot>
			{/if}
		{:else}
			<slot />
		{/if}
	</a>
{:else if tag === 'button'}
	<button {type} class={buttonClass} aria-disabled={isDisabled} use:sAction {...$$restProps} on:*>
		{#if isLoading}
			{#if spinnerPosition === 'left'}<slot name="spinner">
					<Spinner />
				</slot>
			{/if}
			<slot />
			{#if spinnerPosition === 'right'}<slot name="spinner">
					<Spinner />
				</slot>
			{/if}
		{:else}
			<slot />
		{/if}
	</button>
{:else}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<svelte:element
		this={tag}
		{...$$restProps}
		class={buttonClass}
		on:*
		role="button"
		tabindex="0"
		aria-disabled={isDisabled}
		use:sAction
	>
		{#if isLoading}
			{#if spinnerPosition === 'left'}<slot name="spinner">
					<Spinner />
				</slot>
			{/if}
			<slot />
			{#if spinnerPosition === 'right'}<slot name="spinner">
					<Spinner />
				</slot>
			{/if}
		{:else}
			<slot />
		{/if}
	</svelte:element>
{/if}
