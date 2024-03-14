<script lang="ts">
	import type {
		BreadcrumbCtxType,
		BreadcrumbVariant,
		BreadcrumbVariantType,
		Color,
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

	const colorStyles: Color = {
		default: 'text-gray-800 dark:text-white',
		primary: 'text-primary-500',
		secondary: 'text-violet-500',
		success: 'text-green-500',
		danger: 'text-red-500',
		warning: 'text-yellow-500',
		info: 'text-blue-500'
	};

	const variantStyles: BreadcrumbVariant = {
		solid: 'bg-gray-200 dark:bg-gray-800',
		bordered: 'border-2 border-gray-300 dark:border-gray-600'
	};

	const divClass = twMerge(
		'flex px-5 py-3 gap-4',
		isDisabled ? 'opacity-50 pointer-events-none' : '',
		sizeStyles[size],
		colorStyles[color],
		variantStyles[variant],
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
