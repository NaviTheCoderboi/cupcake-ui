import type {
	BadgePlacement,
	BadgePlacementType,
	BadgeShapeType,
	Color,
	SizeType
} from '$lib/types';

const sizeStyles = (size: SizeType, isOneChar: boolean) => {
	switch (size) {
		case 'sm':
			return 'text-sm p-1 ' + (!isOneChar ? 'h-4 w-fit' : 'size-4');
		case 'md':
			return 'text-base p-2 ' + (!isOneChar ? 'h-6 w-fit' : 'size-6');
		case 'lg':
			return 'text-xl p-3 ' + (!isOneChar ? 'h-8 w-fit' : 'size-8');
	}
};

const colorStyles: Color = {
	default: 'text-black bg-gray-300 dark:bg-gray-700 dark:text-white',
	primary: 'text-white bg-primary-500',
	secondary: 'text-white bg-violet-600',
	success: 'text-black bg-green-500',
	danger: 'text-black bg-red-500',
	warning: 'text-black bg-yellow-500',
	info: 'text-black bg-blue-500'
};

const PlacementStyles = (placement: BadgePlacementType, shape: BadgeShapeType) => {
	switch (shape) {
		case 'rectangle':
			if (placement === 'top-left') {
				return 'top-[10%] left-[10%]';
			} else if (placement === 'top-right') {
				return 'top-[10%] right-[10%]';
			} else if (placement === 'bottom-left') {
				return 'bottom-[10%] left-[10%]';
			} else {
				return 'bottom-[10%] right-[10%]';
			}
		case 'circle':
			if (placement === 'top-left') {
				return 'top-[15%] left-[15%]';
			} else if (placement === 'top-right') {
				return 'top-[15%] right-[15%]';
			} else if (placement === 'bottom-left') {
				return 'bottom-[15%] left-[15%]';
			} else {
				return 'bottom-[15%] right-[15%]';
			}
	}
};

const offsetStyles: BadgePlacement = {
	'top-left': '-translate-x-1/2 -translate-y-1/2',
	'top-right': 'translate-x-1/2 -translate-y-1/2',
	'bottom-left': '-translate-x-1/2 translate-y-1/2',
	'bottom-right': 'translate-x-1/2 translate-y-1/2'
};

export { PlacementStyles, colorStyles, offsetStyles, sizeStyles };
