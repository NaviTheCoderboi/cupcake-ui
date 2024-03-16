import type { Action } from 'svelte/action';
import type Avatar from './Avatar/Avatar.svelte';

const getInitials = (name: string) => {
	return name
		.split(' ')
		.map((n) => n[0])
		.join('');
};

const isImage = (contentType: string) => {
	return contentType.startsWith('image');
};

const canLoadImage = async (url: string) => {
	try {
		const response = await fetch(url, {
			method: 'HEAD',
			mode: 'no-cors'
		});
		const contentType = response.headers.get('content-type');
		if (contentType && isImage(contentType)) {
			return true;
		}
		throw new Error('Invalid content type');
	} catch {
		throw new Error('Failed to load image');
	}
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const refreshAvatar = (node: Avatar) => {
	node.$set({ showFallback: false });
};

const useRipple: Action = (node) => {
	const handleClick = (e: MouseEvent) => {
		const x = e.clientX - node.offsetLeft;
		const y = e.clientY - node.offsetTop;
		const ripple = document.createElement('span');

		ripple.style.display = 'block';
		ripple.style.position = 'absolute';
		ripple.style.backgroundColor = '#fff';
		ripple.style.transform = 'translate(-50%, -50%)';
		ripple.style.pointerEvents = 'none';
		ripple.style.borderRadius = '9999px';
		ripple.style.left = x + 'px';
		ripple.style.top = y + 'px';
		ripple.animate(
			[
				{ width: '0px', height: '0px', opacity: '0.5' },
				{ width: '150px', height: '150px', opacity: '0' }
			],
			{
				duration: 500,
				easing: 'linear',
				iterations: Infinity
			}
		);
		node.appendChild(ripple);
		setTimeout(() => {
			ripple.remove();
		}, 10000);
	};
	node.addEventListener('click', handleClick);
	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		}
	};
};

export { canLoadImage, getInitials, refreshAvatar, sleep, useRipple };
