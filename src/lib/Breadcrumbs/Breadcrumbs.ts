import type { BreadcrumbsUnderline, Color } from '$lib/types';

const underlineStyles: BreadcrumbsUnderline = {
	none: '',
	hover: 'hover:underline',
	focus: 'focus:underline',
	active: 'active:underline',
	always: 'underline'
};

const colorStyles: Color = {
	default: 'text-gray-800 dark:text-white',
	primary: 'text-primary-500',
	secondary: 'text-violet-500',
	success: 'text-green-500',
	danger: 'text-red-500',
	warning: 'text-yellow-500',
	info: 'text-blue-500'
};

export { colorStyles, underlineStyles };
