import type { Color, Radius, Size } from '$lib/types';

const sizeStyles: Size = {
	sm: 'size-4',
	md: 'size-7',
	lg: 'size-10'
};

const colorStyles: Color = {
	default: 'bg-gray-300 dark:bg-gray-700',
	primary: 'bg-primary-500',
	secondary: 'bg-violet-500',
	success: 'bg-green-500',
	danger: 'bg-red-500',
	warning: 'bg-yellow-500',
	info: 'bg-blue-500'
};

const radiusStyles: Radius = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-xl',
	full: 'rounded-full'
};

export { colorStyles, radiusStyles, sizeStyles };

