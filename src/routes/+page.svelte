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

<script lang="ts">
	import Accordian from '$lib/Accordian/Accordian.svelte';
	import AccordianItem from '$lib/Accordian/AccordianItem.svelte';
	import Avatar from '$lib/Avatar/Avatar.svelte';
	import Breadcrumbs from '$lib/Breadcrumbs/Breadcrumbs.svelte';
	import Button from '$lib/Button/Button.svelte';
	import ButtonGroup from '$lib/Button/ButtonGroup.svelte';
</script>

<ButtonGroup color="primary" radius="full" variant="ghost">
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

<Breadcrumbs>
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
</Breadcrumbs>
