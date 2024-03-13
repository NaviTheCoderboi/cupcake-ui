<script lang="ts">
	type SpinnerTypes = {
		size: string | number;
		color: string;
		unit: string;
		duration: string;
		pause: boolean;
		fatness: string | number;
	};

	export let color: SpinnerTypes['color'] = '#fff';
	export let unit: SpinnerTypes['unit'] = 'px';
	export let duration: SpinnerTypes['duration'] = '0.75s';
	export let size: SpinnerTypes['size'] = '30';
	export let pause: SpinnerTypes['pause'] = false;
	export let fatness: SpinnerTypes['fatness'] = '4';
</script>

<div
	class="circle"
	class:pause-animation={pause}
	style="--size: {size}{unit}; --color: {color}; --duration: {duration}; --fatness: {fatness}{unit};"
/>

<style>
	.circle {
		height: var(--size);
		width: var(--size);
		border-color: var(--color) transparent var(--color) var(--color);
		border-width: calc(var(--fatness));
		border-style: solid;
		border-image: initial;
		border-radius: 50%;
		animation: var(--duration) linear 0s infinite normal none running rotate;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
