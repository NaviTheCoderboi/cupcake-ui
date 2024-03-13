<script lang="ts">
	import { sleep } from '$lib/helpers';

	export let barColor: string = 'bg-black dark:bg-white';
	export let checked: boolean = false;

	let bar1: HTMLDivElement;
	let bar2: HTMLDivElement;
	let bar3: HTMLDivElement;

	const toggle = () => {
		if (!checked) {
			bar1.style.transform = 'translateY(20px)';
			bar3.style.transform = 'translateY(-20px)';
			bar2.style.visibility = 'hidden';
			sleep(200).then(() => {
				bar1.style.transform = bar1.style.transform + ' rotate(45deg)';
				bar3.style.transform = bar3.style.transform + ' rotate(-45deg)';
				checked = true;
			});
		} else {
			bar1.style.transform = bar1.style.transform + ' rotate(-45deg)';
			bar3.style.transform = bar3.style.transform + ' rotate(45deg)';
			sleep(200).then(() => {
				bar1.style.transform = '';
				bar3.style.transform = '';
				bar2.style.visibility = 'visible';
			});
			checked = false;
		}
	};
</script>

<button class="button1" on:click={toggle}>
	<div class="bar {barColor}" bind:this={bar1}></div>
	<div class="bar {barColor}" bind:this={bar2}></div>
	<div class="bar {barColor}" bind:this={bar3}></div>
</button>

<style>
	.button1 {
		width: 60px;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 10px;
	}

	.bar {
		width: 100%;
		height: 10px;
		border-radius: 9999px;
		transition: transform 0.3s;
	}
</style>
