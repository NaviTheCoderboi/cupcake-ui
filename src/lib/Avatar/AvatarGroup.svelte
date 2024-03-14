<script lang="ts">
	import type { AvatarCtxType, ColorsType, RadiusType, SizeType } from '$lib/types';
	import { setContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		color?: ColorsType;
		radius?: RadiusType;
		size?: SizeType;
		isBordered?: boolean;
		isDisabled?: boolean;
		className?: string;
	};

	export let color: ColorsType = 'primary';
	export let radius: RadiusType = 'full';
	export let size: SizeType = 'md';
	export let isBordered: boolean = false;
	export let isDisabled: boolean = false;
	export let className: string = '';

	const divClass = twMerge('inline-flex justify-center items-center last:mr-0', className);

	setContext<AvatarCtxType>('avatarCtx', {
		color,
		radius,
		size,
		isBordered,
		isDisabled
	});
</script>

<div {...$$restProps} class={divClass} role="group" on:*>
	<slot />
</div>
