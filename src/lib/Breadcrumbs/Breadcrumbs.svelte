<script lang="ts">
	import type {
		BreadcrumbsCtxType,
		BreadcrumbsUnderlineType,
		BreadcrumbsVariant,
		BreadcrumbsVariantType,
		Color,
		ColorsType,
		Radius,
		RadiusType,
		Size,
		SizeType
	} from '$lib/types';
	import { setContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAttributes<HTMLElement> & {
		variant?: BreadcrumbsVariantType;
		color?: ColorsType;
		size?: SizeType;
		radius?: RadiusType;
		hideSeprator?: boolean;
		isDisabled?: boolean;
		className?: string;
		underline?: BreadcrumbsUnderlineType;
	};

	export let variant: BreadcrumbsVariantType = 'solid';
	export let color: ColorsType = 'primary';
	export let size: SizeType = 'md';
	export let radius: RadiusType = 'md';
	export let hideSeparator: boolean = false;
	export let isDisabled: boolean = false;
	export let underline: BreadcrumbsUnderlineType = 'hover';

	setContext<BreadcrumbsCtxType>('breadcumbsCtx', {
		color,
		hideSeparator,
		underline,
		isDisabled
	});

	const sizeStyles: Size = {
		sm: 'text-base font-light',
		md: 'text-lg',
		lg: 'text-xl font-medium'
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

	const variantStyles: BreadcrumbsVariant = {
		solid: 'bg-gray-200 dark:bg-gray-800',
		bordered: 'border-2 border-gray-300 dark:border-gray-600'
	};

	const radiusStyles: Radius = {
		none: 'rounded-none',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-xl',
		full: 'rounded-full'
	};

	const divClass = twMerge(
		'flex flex-wrap list-none px-5 py-3 gap-4',
		sizeStyles[size],
		colorStyles[color],
		variantStyles[variant],
		radiusStyles[radius]
	);

	const BreadcrumbsId = crypto.randomUUID();
</script>

<nav aria-label="Breadcrumbs-{BreadcrumbsId}" {...$$restProps} on:*>
	<ol class={divClass}>
		<slot />
	</ol>
</nav>
