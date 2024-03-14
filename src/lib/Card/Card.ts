import type { CardShadow, Radius } from '$lib/types';

const shadowStyles: CardShadow = {
	none: 'shadow-none',
	sm: 'shadow-sm',
	md: 'shadow-lg',
	lg: 'shadow-2xl'
};

const radiusStyles: Radius = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-xl',
	full: 'rounded-full'
};

const headerRadiusStyles: Radius = {
	none: 'rounded-t-none',
	sm: 'rounded-t-sm',
	md: 'rounded-t-md',
	lg: 'rounded-t-xl',
	full: 'rounded-t-full'
};

const footerRadiusStyles: Radius = {
	none: 'rounded-b-none',
	sm: 'rounded-b-sm',
	md: 'rounded-b-md',
	lg: 'rounded-b-xl',
	full: 'rounded-b-full'
};

export { footerRadiusStyles, headerRadiusStyles, radiusStyles, shadowStyles };
