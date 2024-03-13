import type { ButtonVariantsType, Color, ColorsType, Radius, Size, SizeType } from '$lib/types';

const sizeStyles: Size = {
	sm: 'px-4 py-2 text-sm font-light',
	md: 'px-5 py-2.5 text-lg font-normal',
	lg: 'px-6 py-3 text-xl font-semibold'
};

const radiusStyles: Radius = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-xl',
	full: 'rounded-full'
};

const buttonGroupRadiusStyles: Radius = {
	none: 'rounded-none',
	sm: 'first:rounded-l-sm last:rounded-r-sm',
	md: 'first:rounded-l-md last:rounded-r-md',
	lg: 'first:rounded-l-xl last:rounded-r-xl',
	full: 'first:rounded-l-full last:rounded-r-full'
};

const shadowStyles: Color = {
	default: 'shadow-gray-500/50',
	primary: 'shadow-primary-500/50',
	secondary: 'shadow-violet-700/50',
	success: 'shadow-green-400/50',
	danger: 'shadow-red-500/50',
	warning: 'shadow-yellow-500/50',
	info: 'shadow-blue-500/50'
};

const solidStyles: Color = {
	default:
		'text-black bg-gray-300 hover:bg-gray-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-800',
	primary: 'text-white bg-primary-500 hover:bg-primary-400 dark:hover:bg-primary-600',
	secondary:
		'text-white bg-violet-600 hover:bg-violet-500  dark:bg-violet-500 dark:hover:bg-violet-600',
	success: 'text-black bg-green-400 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-600',
	danger: 'text-black bg-red-500 hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-600',
	warning:
		'text-black bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-600',
	info: 'text-black bg-blue-500 hover:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600'
};

const borderedStyles: Color = {
	default:
		'border-2 border-gray-800 text-gray-800 hover:border-gray-700 hover:text-gray-700 dark:text-gray-300 dark:border-gray-300 dark:hover:text-gray-400 dark:hover:border-gray-400',
	primary:
		'border-2 border-primary-500 text-primary-500 hover:border-primary-400 hover:text-primary-400 dark:hover:border-primary-600 dark:hover:text-primary-600',
	secondary:
		'border-2 border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-700 dark:hover:text-violet-700',
	success:
		'border-2 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300 dark:hover:border-green-500 dark:hover:text-green-500',
	danger: 'border-2 border-red-500 text-red-500 hover:border-red-400 hover:text-red-400 dark:hover:border-red-600 dark:hover:text-red-600',
	warning:
		'border-2 border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400 dark:hover:border-yellow-600 dark:hover:text-yellow-600',
	info: 'border-2 border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400 dark:hover:border-blue-600 dark:hover:text-blue-600'
};

const ghostStyles: Color = {
	default:
		'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:text-white dark:border-gray-700 dark:hover:bg-gray-700',
	primary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
	secondary: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white',
	success: 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white',
	danger: 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
	warning: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white',
	info: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
};

const variantStyles = (variant: ButtonVariantsType, color: ColorsType) => {
	switch (variant) {
		case 'solid':
			return solidStyles[color];
		case 'bordered':
			return borderedStyles[color];
		case 'shadow':
			return solidStyles[color] + ' shadow-xl ' + shadowStyles[color];
		case 'ghost':
			return ghostStyles[color];
	}
};

const iconStyles = (size: SizeType) => {
	switch (size) {
		case 'sm':
			return 'size-8 p-1';
		case 'md':
			return 'size-12 p-2';
		case 'lg':
			return 'size-16 p-4';
	}
};

export {
	buttonGroupRadiusStyles,
	iconStyles,
	radiusStyles,
	shadowStyles,
	sizeStyles,
	variantStyles
};
