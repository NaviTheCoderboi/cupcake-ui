<script lang="ts">
	import type { AutoCompleteVariantType, ColorsType, RadiusType, SizeType } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';
	import { inputStyles, labelStyles, sizeStyles, variantStyles } from './Autocomplete';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		label?: string;
		name?: string;
		variant?: AutoCompleteVariantType;
		color?: ColorsType;
		size?: SizeType;
		radius?: RadiusType;
		placeholder?: string;
		values?: { label: string; value: string }[];
		defaultSelected?: string;
		selected?:
			| ({ label: string; value: string } | undefined)
			| Writable<{ label: string; value: string } | undefined>;
		defaultFilter?: (textValue: string, inputValue: string) => boolean;
		isReadOnly?: boolean;
		isDisabled?: boolean;
		isRequired?: boolean;
		isValid?: boolean;
		className?: string;
	};

	export let label: string = '';
	export let name: string = '';
	export let variant: AutoCompleteVariantType = 'flat';
	export let color: ColorsType = 'primary';
	export let size: SizeType = 'md';
	export let radius: RadiusType = 'md';
	export let placeholder: string | undefined = undefined;
	export let values: { label: string; value: string }[] = [];
	export let defaultSelected: string = '';
	export let selected:
		| ({ label: string; value: string } | undefined)
		| Writable<{ label: string; value: string } | undefined> = undefined;
	export let defaultFilter: (textValue: string, inputValue: string) => boolean = (
		textValue,
		inputValue
	) => textValue.toLowerCase().includes(inputValue.toLowerCase());
	export let isReadOnly: boolean = false;
	export let isDisabled: boolean = false;
	export let isRequired: boolean = false;
	export let isValid: boolean = true;
	export let className: string = '';

	const divClass = twMerge(
		variantStyles(variant, color),
		sizeStyles[size],
		'relative group',
		className
	);

	const inputID = crypto.randomUUID();
</script>

<div class={divClass}>
	<input
		type="text"
		{name}
		class={inputStyles(placeholder !== undefined, size, color)}
		{placeholder}
		id="autocomplete-{inputID}"
	/>
	<label for="autocomplete-{inputID}" class={labelStyles(size, placeholder !== undefined)}
		>{label}</label
	>
</div>

<!-- 
SLots:
- label
- description
- error message
- selector icon
- clear icon    
--->
