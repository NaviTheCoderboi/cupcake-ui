<script lang="ts">
	import type {
		AccordianCtxType,
		AccordianSelectioType,
		AccordianVariantType,
		TransitionParamTypes,
		TransitionTypes
	} from '$lib/types';
	import { setContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: AccordianVariantType;
		selection?: AccordianSelectioType;
		isDisabled?: boolean;
		className?: string;
		transitionType?: TransitionTypes;
		transitionParams?: TransitionParamTypes;
	};

	export let variant: AccordianVariantType = 'default';
	export let selection: AccordianSelectioType = 'single';
	export let isDisabled: boolean = false;
	export let className: string = '';
	export let transitionType: TransitionTypes = 'slide';
	export let transitionParams: TransitionParamTypes = {};

	const divClass = twMerge(
		'flex flex-col justify-center items-center px-2 py-2',
		variant === 'split' ? 'gap-4' : 'divide-y-[1px] divide-gray-500 dark:divide-gray-600',
		className
	);

	setContext<AccordianCtxType>('accordianCtx', {
		variant: variant,
		isDisabled: isDisabled,
		selection: selection,
		selected: selection === 'multiple' ? undefined : writable(),
		transitionType: transitionType,
		transitionParams: transitionParams
	});
</script>

<div {...$$restProps} class={divClass} role="group" on:*>
	<slot />
</div>
