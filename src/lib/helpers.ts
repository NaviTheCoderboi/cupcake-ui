import type Avatar from './Avatar/Avatar.svelte';

const getInitials = (name: string) => {
	return name
		.split(' ')
		.map((n) => n[0])
		.join('');
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const refreshAvatar = (node: Avatar) => {
	node.$set({ showFallback: false });
};

export { getInitials, refreshAvatar, sleep };
