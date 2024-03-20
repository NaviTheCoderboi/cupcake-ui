<script lang="ts">
	import type {
		CheckboxGroupCtxType,
		CheckboxGroupOrientationType,
		ColorsType,
		RadiusType,
		SizeType
	} from '$lib/types';
	import { setContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		orientation?: CheckboxGroupOrientationType;
		color?: ColorsType;
		size?: SizeType;
		radius?: RadiusType;
		name?: string;
		label?: string;
		value?: string[];
		defaultValue?: string[];
		isInvalid?: boolean;
		isDisabled?: boolean;
		isRequired?: boolean;
		className?: string;
		labelClass?: string;
	};

	export let orientation: CheckboxGroupOrientationType = 'vertical';
	export let color: ColorsType = 'primary';
	export let size: SizeType = 'md';
	export let radius: RadiusType = 'md';
	export let name: string = '';
	export let label: string = '';
	export let value: string[] = [];
	export let defaultValue: string[] = [];
	export let isInvalid: boolean = false;
	export let isDisabled: boolean = false;
	export let isRequired: boolean = false;
	export let className: string = '';
	export let labelClass: string = '';

	value.push(...defaultValue);

	setContext<CheckboxGroupCtxType>('checkboxGroupCtx', {
		color,
		defaultValue,
		isDisabled,
		isInvalid,
		isRequired,
		radius,
		size,
		value
	});
</script>

<slot />
<!-- 
slots ->
	- default
	- description
	- error-message
 -->
