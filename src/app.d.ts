// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare namespace svelteHTML {
	type HTMLProps<Property extends string, Override> = Omit<
		Omit<
			import('svelte/elements').SvelteHTMLElements[Property],
			keyof EventsWithColon<
				Omit<svelte.JSX.IntrinsicElements[Property & string], svelte.JSX.AttributeNames>
			>
		> &
			EventsWithColon<
				Omit<svelte.JSX.IntrinsicElements[Property & string], svelte.JSX.AttributeNames>
			>,
		keyof Override
	> &
		Override &
		(
			| Record<
					'on:*',
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(event: Event & { currentTarget: EventTarget & EventTarget }) => any | never
			  >
			| object
		);
}

export {};
