<script lang="ts">
	import { browser } from '$app/environment';
	import Github from '$docs/icons/Github.svelte';
	import Theme from '$docs/icons/Theme.svelte';
	import { onMount } from 'svelte';

	interface NavItem {
		name: string;
		link: string;
	}

	const navItems: NavItem[] = [
		{ name: 'Docs', link: '/docs' },
		{ name: 'Components', link: '/components' }
	];

	let theme: 'light' | 'dark' | 'system';
	onMount(() => {
		theme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | 'system';
	});

	const toggle = () => {
		if (!browser) return;
		if (theme === 'light') {
			document.documentElement.setAttribute('data-theme', 'dark');
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			theme = 'dark';
		} else if (theme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'system');
			const calculatedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add(calculatedTheme);
			localStorage.setItem('theme', 'system');
			theme = 'system';
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			theme = 'light';
		}
	};
</script>

<div class="sticky top-0 z-50 w-full py-2">
	<nav
		class="mx-auto flex w-4/5 items-center justify-between rounded-full bg-white bg-opacity-10 px-4 py-2 backdrop-blur-sm backdrop-filter dark:bg-black"
	>
		<a href="/" class="flex items-center justify-center gap-2">
			<!-- <img src={Logo} alt="" width="50" height="50" />
			<h1 class="text-2xl font-medium">CupCake UI</h1> -->
		</a>
		<div
			class="flex items-center justify-center gap-3 divide-x-2 divide-gray-400 dark:divide-gray-600"
		>
			<div class="flex items-center justify-center gap-3 text-lg font-semibold">
				{#each navItems as item}
					<a href={item.link}>{item.name}</a>
				{/each}
			</div>
			<div class="flex items-center justify-center gap-3 pl-2">
				<a
					href="https://github.com/NaviTheCoderboi/cupcake-ui"
					class="brightness-75 duration-300 hover:brightness-100"
				>
					<Github class="size-7" />
				</a>
				<button
					class="relative size-7 brightness-75 duration-300 hover:brightness-100"
					on:click={toggle}
				>
					<Theme {theme} class="size-7" />
				</button>
			</div>
		</div>
	</nav>
</div>
<svelte:head>
	<script>
		(() => {
			document.documentElement.classList.remove('dark');
			const theme = localStorage.getItem('theme') || 'system';
			document.documentElement.setAttribute('data-theme', theme);
			if (theme === 'system') {
				const calculatedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
				document.documentElement.classList.add(calculatedTheme);
			} else if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		})();
	</script>
</svelte:head>
