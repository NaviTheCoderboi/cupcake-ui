import type { AutoCompleteVariantType, Color, ColorsType, Size, SizeType } from '$lib/types';

const flatStyles: Color = {
	default:
		'bg-gray-100 text-black dark:text-white hover:bg-gray-300 duration-300 dark:bg-gray-800 dark:hover:bg-gray-700',
	primary:
		'bg-primary-50 text-primary-500 hover:bg-primary-100 duration-300 dark:bg-primary-900/50 dark:hover:bg-primary-900/70',
	secondary:
		'bg-violet-100 hover:bg-violet-200 text-violet-600 duration-300 dark:bg-violet-900/50 dark:hover:bg-violet-900/70',
	success:
		'bg-green-100 hover:bg-green-200 text-green-600 duration-300 dark:bg-green-900/50 dark:hover:bg-green-900/70',
	danger: 'bg-red-100 hover:bg-red-200 text-red-600 duration-300 dark:bg-red-900/50 dark:hover:bg-red-900/70',
	warning:
		'bg-yellow-100 hover:bg-yellow-200 text-yellow-600 duration-300 dark:bg-yellow-900/50 dark:hover:bg-yellow-900/70',
	info: 'bg-blue-100 hover:bg-blue-200 text-blue-600 duration-300 dark:bg-blue-900/50 dark:hover:bg-blue-900/70'
};

const borderedStyles: Color = {
	default:
		'text-white border-2 bg-inherit border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 focus-within:border-gray-600 dark:focus-within:border-white',
	primary:
		'text-primary-500 border-2 bg-inherit border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 focus-within:border-primary-500 dark:focus-within:border-primary-500',
	secondary:
		'text-violet-500 border-2 bg-inherit border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 focus-within:border-violet-500 dark:focus-within:border-violet-500',
	success:
		'text-green-500 border-2 bg-inherit border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 focus-within:border-green-500 dark:focus-within:border-green-500',
	danger: 'text-red-500 border-2 bg-inherit border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 focus-within:border-red-500 dark:focus-within:border-red-500',
	warning:
		'text-yellow-500 border-2 bg-inherit border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 focus-within:border-yellow-500 dark:focus-within:border-yellow-500',
	info: 'text-blue-500 border-2 bg-inherit border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600 focus-within:border-blue-500 dark:focus-within:border-blue-500'
};

const underlinedStyles: Color = {
	default:
		'before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 dark:before:bg-gray-800 dark:hover:before:bg-gray-700 duration-300 before:bg-gray-400 hover:before:bg-gray-500',
	primary:
		'before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 dark:before:bg-gray-800 dark:hover:before:bg-gray-700 duration-300 before:bg-gray-400 hover:before:bg-gray-500',
	secondary:
		'before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 dark:before:bg-gray-800 dark:hover:before:bg-gray-700 duration-300 before:bg-gray-400 hover:before:bg-gray-500',
	success:
		'before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 dark:before:bg-gray-800 dark:hover:before:bg-gray-700 duration-300 before:bg-gray-400 hover:before:bg-gray-500',
	danger: 'before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 dark:before:bg-gray-800 dark:hover:before:bg-gray-700 duration-300 before:bg-gray-400 hover:before:bg-gray-500',
	warning:
		'before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 dark:before:bg-gray-800 dark:hover:before:bg-gray-700 duration-300 before:bg-gray-400 hover:before:bg-gray-500',
	info: 'before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 dark:before:bg-gray-800 dark:hover:before:bg-gray-700 duration-300 before:bg-gray-400 hover:before:bg-gray-500'
};

const underlinedAnimationStyles: Color = {
	default:
		'after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-black dark:after:bg-white after:scale-x-0 focus-within:after:scale-x-[1] after:transition-transform after:duration-300 after:origin-center',
	primary:
		'after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-primary-500 after:scale-x-0 focus-within:after:scale-x-[1] after:transition-transform after:duration-300 after:origin-center',
	secondary:
		'after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-violet-500 after:scale-x-0 focus-within:after:scale-x-[1] after:transition-transform after:duration-300 after:origin-center',
	success:
		'after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-green-500 after:scale-x-0 focus-within:after:scale-x-[1] after:transition-transform after:duration-300 after:origin-center',
	danger: 'after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-red-500 after:scale-x-0 focus-within:after:scale-x-[1] after:transition-transform after:duration-300 after:origin-center',
	warning:
		'after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-yellow-500 after:scale-x-0 focus-within:after:scale-x-[1] after:transition-transform after:duration-300 after:origin-center',
	info: 'after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-blue-500 after:scale-x-0 focus-within:after:scale-x-[1] after:transition-transform after:duration-300 after:origin-center'
};

const inputTextColor: Color = {
	default: 'text-black dark:text-white placeholder:text-black dark:placeholder-white',
	primary:
		'text-primary-500 dark:text-primary-400 placeholder:text-primary-500 dark:placeholder-primary-400',
	secondary:
		'text-violet-500 dark:text-violet-400 placeholder:text-violet-500 dark:placeholder-violet-400',
	success:
		'text-green-500 dark:text-green-400 placeholder:text-green-500 dark:placeholder-green-400',
	danger: 'text-red-500 dark:text-red-400 placeholder:text-red-500 dark:placeholder-red-400',
	warning:
		'text-yellow-500 dark:text-yellow-400 placeholder:text-yellow-500 dark:placeholder-yellow-400',
	info: 'text-blue-500 dark:text-blue-400 placeholder:text-blue-500 dark:placeholder-blue-400'
};

const variantStyles = (variant: AutoCompleteVariantType, color: ColorsType) => {
	switch (variant) {
		case 'flat':
			return flatStyles[color];
		case 'bordered':
			return borderedStyles[color];
		case 'underlined':
			return underlinedStyles[color] + ' ' + underlinedAnimationStyles[color];
	}
};

const sizeStyles: Size = {
	sm: 'py-1 px-2',
	md: 'py-2 px-3',
	lg: 'py-3 px-4'
};

const labelStyles = (size: SizeType, placeholder: boolean) => {
	if (placeholder) {
		const sizeStyles = size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base';
		return 'absolute top-1/2 left-0 transform -translate-y-1/2 ' + sizeStyles;
	}
	const sizeStyles = size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-2xl';
	return 'absolute top-1/2 left-0 transform -translate-y-1/2 ' + sizeStyles;
};

const inputStyles = (placeholder: boolean, size: SizeType, color: ColorsType) => {
	if (!placeholder) {
		const sizeStyles = size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-2xl';
		return (
			'outline-none border-none bg-transparent w-full ' +
			sizeStyles +
			' ' +
			inputTextColor[color]
		);
	} else {
		const sizeStyles =
			size === 'sm'
				? 'text-sm placeholder:text-base'
				: size === 'md'
					? 'text-base placeholder:text-lg'
					: 'text-lg placeholder:text-2xl';
		return (
			'outline-none border-none bg-transparent w-full ' + sizeStyles + inputTextColor[color]
		);
	}
};

export { inputStyles, labelStyles, sizeStyles, variantStyles };
