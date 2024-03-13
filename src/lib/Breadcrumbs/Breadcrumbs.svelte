<script lang="ts">
	import type {
		BreadcrumbCtxType,
		BreadcrumbVariantType,
		ColorsType,
		RadiusType,
		Size,
		SizeType
	} from '$lib/types';
	import { setContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: BreadcrumbVariantType;
		color?: ColorsType;
		size?: SizeType;
		radius?: RadiusType;
		hideSeprator?: boolean;
		isDisabled?: boolean;
		className?: string;
	};

	export let variant: BreadcrumbVariantType = 'solid';
	export let color: ColorsType = 'primary';
	export let size: SizeType = 'md';
	export let radius: RadiusType = 'md';
	export let hideSeparator: boolean = false;
	export let isDisabled: boolean = false;
	export let className: string = '';

	setContext<BreadcrumbCtxType>('Breadcrumbs', {
		color,
		variant,
		hideSeparator
	});

	const sizeStyles: Size = {
		sm: 'text-base',
		md: 'text-lg',
		lg: 'text-xl'
	};

	const divClass = twMerge(
		'flex px-5 py-3 gap-4',
		isDisabled ? 'opacity-50 pointer-events-none' : '',
		sizeStyles[size],
		className
	);
</script>

<div class={divClass}>
	<slot />
</div>

<!-- 
Slots ->
    - default
    - seprator
-->
