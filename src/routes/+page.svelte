<!-- <script lang="ts">
	import Logo from '$docs/assets/logo.webp';
</script>

<main class="min-h-screen">
	<section class="flex flex-col items-center justify-center px-3 py-6 text-7xl font-bold">
		<div class="flex items-center justify-center gap-2">
			<img src={Logo} alt="" width="150" height="150" />
			sweeten your UI
		</div>
		<div class="font-medium">with Cupcake UI</div>
		<div class="flex items-center justify-center py-6"></div>
	</section>
</main>

Sweeten Your Interface with Cupcake UI: Delightful Designs Made Easy! -->

<!-- <script lang="ts">
	import Accordian from '$lib/Accordian/Accordian.svelte';
	import AccordianItem from '$lib/Accordian/AccordianItem.svelte';
	import Avatar from '$lib/Avatar/Avatar.svelte';
	import AvatarGroup from '$lib/Avatar/AvatarGroup.svelte';
	import Badge from '$lib/Badge/Badge.svelte';
	import Button from '$lib/Button/Button.svelte';
	import ButtonGroup from '$lib/Button/ButtonGroup.svelte';
	import Card from '$lib/Card/Card.svelte';
	import { getInitials } from '$lib/helpers';
</script>

<ButtonGroup color="primary" radius="full" variant="ghost" className="flex">
	<Button>Button 1</Button>
	<Button>Button 2</Button>
	<Button>Button 3</Button>
	<Button>Button 4</Button>
</ButtonGroup>

<Accordian className="w-[25vw]" variant="split">
	<AccordianItem>
		<h2 slot="header" class="flex items-center justify-between gap-3">
			<Avatar
				src="https://randomuser.me/api/portraits/men/71.jpg"
				isBordered
				color="info"
				className="ring-offset-white dark:ring-offset-black size-12 rounded-2xl"
			>
				<h1 slot="fallback">user</h1>
			</Avatar>
			<div class="flex flex-col justify-center gap-0.5 py-2">
				<h1 class="text-lg font-medium">User 1</h1>
				<h2 class="text-base font-normal text-gray-600 dark:text-gray-300">
					3 unread messages
				</h2>
			</div>
		</h2>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		nisi ut aliquip ex ea commodo consequat.
	</AccordianItem>
	<AccordianItem open>
		<h2 slot="header" class="flex items-center justify-between gap-3">
			<Avatar
				src="https://randomuser.me/api/portraits/women/39.jpg"
				isBordered
				color="success"
				className="ring-offset-white dark:ring-offset-black size-12 rounded-2xl"
			>
				<h1 slot="fallback">user</h1>
			</Avatar>
			<div class="flex flex-col justify-center gap-0.5 py-2">
				<h1 class="text-lg font-medium">User 2</h1>
				<h2 class="text-base font-normal text-gray-600 dark:text-gray-300">
					3 unread messages
				</h2>
			</div>
		</h2>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		nisi ut aliquip ex ea commodo consequat.
	</AccordianItem>
	<AccordianItem isDisabled>
		<h2 slot="header" class="flex items-center justify-between gap-3">
			<Avatar
				src="https://randomuser.me/api/portraits/men/72.jpg"
				isBordered
				color="warning"
				className="ring-offset-white dark:ring-offset-black size-12 rounded-2xl"
			>
				<h1 slot="fallback">user</h1>
			</Avatar>
			<div class="flex flex-col justify-center gap-0.5 py-2">
				<h1 class="text-lg font-medium">User 3</h1>
				<h2 class="text-base font-normal text-gray-600 dark:text-gray-300">
					3 unread messages
				</h2>
			</div>
		</h2>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		nisi ut aliquip ex ea commodo consequat.
	</AccordianItem>
</Accordian>
<AvatarGroup isBordered>
	{#each [1, 2, 3, 4, 5] as key}
		<Avatar src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Mia"></Avatar>
	{/each}
</AvatarGroup>

<Avatar src="https://google.com">
	<h1 slot="fallback" class="text-2xl font-bold text-white">
		{getInitials('Google Avatar')}
	</h1>
</Avatar>

<Badge className="m-2" isOneChar size="sm" shape="circle" placement="bottom-right">
	<Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
</Badge>

<div class="flex flex-col items-center justify-center gap-10 p-6">
	<Card radius="lg" className="w-fit py-4">
		<h1 slot="header" class="flex-col items-start pb-0 pt-2">
			<p class="text-tiny font-bold uppercase">Daily Mix</p>
			<small class="text-default-500">12 Tracks</small>
			<h4 class="text-large font-bold">Frontend Radio</h4>
		</h1>
		<div slot="default" class="overflow-visible py-2">
			<img
				alt="Card background"
				class="rounded-xl object-cover"
				src="https://nextui.org/images/hero-card-complete.jpeg"
				width={270}
			/>
		</div>
	</Card>
</div> -->

<script lang="ts">
	import Checkbox from '$lib/Checkbox/Checkbox.svelte';
	import { scale } from 'svelte/transition';

	let checked: boolean = false;
</script>

<div class="flex h-[90vh] w-full items-center justify-center gap-5">
	<Checkbox bind:isSelected={checked}>
		<svelte:fragment slot="icon" let:isSelected>
			<svg
				stroke="currentColor"
				fill="currentColor"
				stroke-width="0"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				{#if isSelected}
					<path
						transition:scale={{ duration: 500, delay: 200 }}
						transform-origin="center"
						d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
					></path>
				{/if}
			</svg>
		</svelte:fragment>
		do you agree?</Checkbox
	>
</div>
