import type { Writable } from 'svelte/store';

// Universal
export type ColorsType =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info';
export type SizeType = 'sm' | 'md' | 'lg';
export type RadiusType = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type Color = {
	[key in ColorsType]: string;
};
export type Radius = {
	[key in RadiusType]: string;
};
export type Size = {
	[key in SizeType]: string;
};

// Button
export type ButtonVariantsType = 'solid' | 'bordered' | 'ghost' | 'shadow';
export type ButtonCtxType =
	| {
			size: SizeType;
			disabled: boolean;
			color: ColorsType;
			variant: ButtonVariantsType;
			radius: RadiusType;
	  }
	| undefined;

// Accordion
export type AccordianVariantType = 'default' | 'split';
export type AccordianSelectioType = 'single' | 'multiple';
export type AccordianCtxType =
	| {
			variant: AccordianVariantType;
			selection: AccordianSelectioType;
			selected?: Writable<object>;
			isDisabled: boolean;
			transitionType: TransitionTypes;
			transitionParams: TransitionParamTypes;
	  }
	| undefined;
export type TransitionTypes =
	| 'fade'
	| 'fly'
	| 'slide'
	| 'blur'
	| 'in:fly'
	| 'out:fly'
	| 'in:slide'
	| 'out:slide'
	| 'in:fade'
	| 'out:fade'
	| 'in:blur'
	| 'out:blur';
export interface TransitionParamTypes {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

// AutoComplete
export type AutoCompleteVariantType = 'flat' | 'bordered' | 'underlined';

// Badge
export type BadgePlacementType = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type BadgePlacement = {
	[key in BadgePlacementType]: string;
};
export type BadgeShapeType = 'rectangle' | 'circle';

// Breadcrumb
export type BreadcrumbVariantType = 'solid' | 'bordered';
export type BreadcrumbUnderlineType = 'none' | 'active' | 'hover' | 'focus' | 'always';
export type BreadcrumbCtxType = {
	variant: BreadcrumbVariantType;
	color: ColorsType;
	hideSeparator: boolean;
};
export type BreadcrumbVariant = {
	[key in BreadcrumbVariantType]: string;
};