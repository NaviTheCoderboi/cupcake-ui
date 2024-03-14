<script lang="ts">
	import type {
		ButtonCtxType,
		ButtonVariantsType,
		ColorsType,
		RadiusType,
		SizeType
	} from '$lib/types';
	import { setContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { radiusStyles } from './Button';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		size?: SizeType;
		radius?: RadiusType;
		disabled?: boolean;
		className?: string;
		color?: ColorsType;
		variant?: ButtonVariantsType;
	};

	export let size: SizeType = 'md';
	export let radius: RadiusType = 'md';
	export let disabled: boolean = false;
	export let className: string = '';
	export let color: ColorsType = 'primary';
	export let variant: ButtonVariantsType = 'solid';

	const divClass = twMerge('overflow-x-hidden inline-flex', radiusStyles[radius], className);

	setContext<ButtonCtxType>('buttonCtx', {
		size,
		disabled,
		color,
		variant,
		radius
	});
</script>

<div {...$$restProps} class={divClass} role="group" on:*>
	<slot />
</div>
