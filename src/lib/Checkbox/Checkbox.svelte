<script lang="ts">
	import VisuallyHidden from '$lib/prebuilts/visuallyHidden.svelte';
	import type { CheckboxGroupCtxType, ColorsType, RadiusType, SizeType } from '$lib/types';
	import { getContext } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { draw, scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { colorStyles, radiusStyles, sizeStyles } from './Checkbox';

	let checkboxGroupCtx: CheckboxGroupCtxType = getContext('checkboxGroupCtx');
	console.log(checkboxGroupCtx);

	type $$Props = HTMLAttributes<HTMLLabelElement> & {
		value?: string;
		name?: string;
		size?: SizeType;
		color?: ColorsType;
		radius?: RadiusType;
		isSelected?: boolean;
		defaultSelected?: boolean;
		isRequired?: boolean;
		isDisabled?: boolean;
		className?: string;
		iconClass?: string;
		type?: HTMLButtonAttributes['type'];
	};

	export let value: string = '';
	export let name: string = '';
	export let size: SizeType = 'md';
	export let color: ColorsType = 'primary';
	export let radius: RadiusType = 'md';
	export let isSelected: boolean = false;
	export let defaultSelected: boolean = false;
	export let isRequired: boolean = false;
	export let isDisabled: boolean = false;
	export let className: string = '';
	export let iconClass: string = '';
	export let type: HTMLButtonAttributes['type'] = 'button';

	let checkboxClass = twMerge(
		'max-w-fit inline-flex justify-start items-center cursor-pointer p-2 gap-3',
		isDisabled ? 'opacity-50 pointer-events-none' : '',
		className
	);

	let _iconClass = twMerge(
		'overflow-hidden duration-300 p-0.5 border-2',
		sizeStyles[size],
		colorStyles[color],
		isSelected ? `border-gray-600/0 ${colorStyles[color]}` : 'border-gray-600 bg-transparent',
		radiusStyles[radius],
		iconClass
	);

	$: isSelected = defaultSelected;
	$: _iconClass = twMerge(
		'overflow-hidden duration-300 p-0.5 border-2',
		sizeStyles[size],
		colorStyles[color],
		isSelected ? `border-gray-600/0 ${colorStyles[color]}` : 'border-gray-600 bg-transparent',
		radiusStyles[radius],
		iconClass
	);

	$: checkboxClass = twMerge(
		'max-w-fit inline-flex justify-start items-center cursor-pointer p-2 gap-3',
		isDisabled ? 'opacity-50 pointer-events-none' : '',
		className
	);

	const handleCheckbox = () => {
		if (isDisabled) return;
		isSelected = !isSelected;
	};
</script>

<button
	role="checkbox"
	class={checkboxClass}
	on:click|stopPropagation={handleCheckbox}
	aria-checked={isSelected}
	aria-required={isRequired}
	aria-disabled={isDisabled}
	{type}
>
	<VisuallyHidden>
		<input
			type="checkbox"
			{name}
			{value}
			checked={isSelected}
			required={isRequired}
			disabled={isDisabled}
		/>
	</VisuallyHidden>
	<span class={_iconClass}>
		{#if $$slots.icon}
			<slot name="icon" {isSelected} />
		{:else}
			<svg
				stroke="currentColor"
				fill="currentColor"
				stroke-width="0"
				viewBox="0 0 17 18"
				xmlns="http://www.w3.org/2000/svg"
			>
				{#if isSelected}
					<polyline
						in:draw={{ duration: 800, easing: quintOut, delay: 200 }}
						out:scale={{ duration: 500, easing: quintOut, delay: 200 }}
						fill="none"
						points="1 9 7 14 15 4"
						stroke="currentColor"
						stroke-dasharray={22}
						stroke-dashoffset={isSelected ? 44 : 66}
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						transform-origin="center"
					/>
				{/if}
			</svg>
		{/if}
	</span>
	<slot />
</button>
