import type { Color, Radius, Size } from '$lib/types';

const sizeStyles: Size = {
	sm: 'size-10',
	md: 'size-14',
	lg: 'size-20'
};

const radiusStyles: Radius = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-xl',
	full: 'rounded-full'
};

const borderStyles: Color = {
	default: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-gray-700',
	primary: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-primary-500',
	secondary: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-violet-500',
	success: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-green-500',
	danger: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-red-500',
	warning: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-yellow-500',
	info: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-blue-500'
};

const backgroundStyles: Color = {
	default: 'bg-gray-300 dark:bg-gray-700',
	primary: 'bg-primary-500',
	secondary: 'bg-violet-500',
	success: 'bg-green-500',
	danger: 'bg-red-500',
	warning: 'bg-yellow-500',
	info: 'bg-blue-500'
};

export { backgroundStyles, borderStyles, radiusStyles, sizeStyles };
