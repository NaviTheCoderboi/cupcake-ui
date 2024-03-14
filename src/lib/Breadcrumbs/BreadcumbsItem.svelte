<script lang="ts">
	import type { BreadcrumbsCtxType, BreadcrumbsUnderlineType, ColorsType } from '$lib/types';
	import { getContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { colorStyles, underlineStyles } from './Breadcrumbs';

	const ctx: BreadcrumbsCtxType = getContext('breadcumbsCtx');

	type $$Props = HTMLAttributes<HTMLLIElement> & {
		underline?: BreadcrumbsUnderlineType;
		isCurrent?: boolean;
		color?: ColorsType;
		hideSeparator?: boolean;
		className?: string;
		liClass?: string;
		separatorClass?: string;
		isDisabled?: boolean;
	};

	export let underline: BreadcrumbsUnderlineType = ctx?.underline || 'hover';
	export let isCurrent: boolean = false;
	export let color: ColorsType = ctx?.color || 'primary';
	export let hideSeparator: boolean = ctx?.hideSeparator || false;
	export let className: string = '';
	export let liClass: string = '';
	export let isDisabled: boolean = ctx?.isDisabled || false;
	export let separatorClass: string = '';

	const spanClass = twMerge(
		isCurrent
			? 'brightness-100 pointer-events-none'
			: 'brightness-75 cursor-pointer hover:opacity-75 ' + underlineStyles[underline],
		isDisabled
			? isCurrent
				? 'pointer-events-none brightness-100'
				: 'pointer-events-none brightness-75'
			: '',
		colorStyles[color],
		'flex gap-1 items-center  duration-300',
		className
	);

	const _liClass = twMerge('flex items-center underline-offset-4', liClass);
	const _separatorClass = twMerge(colorStyles[color], separatorClass);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li class={_liClass} {...$$restProps} on:*>
	<span
		class={spanClass}
		aria-disabled={isDisabled || isCurrent}
		role={isDisabled || isCurrent ? null : 'link'}
		tabindex={isDisabled || isCurrent ? null : 0}
	>
		<slot />
	</span>
	{#if !hideSeparator}
		{#if !isCurrent}
			{#if $$slots.separator}
				<slot name="separator" />
			{:else}
				<span class={_separatorClass}>
					<svg
						fill="none"
						focusable="false"
						height="1em"
						role="presentation"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						width="1em"><path d="m9 18 6-6-6-6"></path></svg
					>
				</span>
			{/if}
		{/if}
	{:else}
		<span class="{_separatorClass} hidden" aria-hidden="true">
			<svg
				fill="none"
				focusable="false"
				height="1em"
				role="presentation"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				width="1em"><path d="m9 18 6-6-6-6"></path></svg
			>
		</span>
	{/if}
</li>
