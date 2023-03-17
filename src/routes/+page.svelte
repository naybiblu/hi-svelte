<script lang="ts">

	import { onMount } from "svelte";
	import news from "$lib/misc/hotnews.json";

	let scroll1 = {
		pos: 0,
		max: 0
	};

	onMount(() => {
		let scr1 = document.querySelector("#one");
		scroll1.max = scr1!.scrollWidth - scr1!.clientWidth;
	})

	const checkScroll1 = (e: any) => {
		scroll1.pos = e.target.scrollLeft;
		console.log(scroll1.max)
	}
	const operateScroll1 = (e: any) => {
		var parent = document.querySelector("#one");
		if (e.target.parentNode.id === "r-1") parent!.scrollLeft += 200;
		else parent!.scrollLeft -= 200;
	}
</script>

<style>
	.hide-scroll::-webkit-scrollbar {
		display: none;
	}

	.hide-scroll {
		-ms-overflow-style: none;
  		scrollbar-width: none;
	}
</style>

<svelte:head>
	<title>Home | Hi-Svelte</title>
	<link rel="icon" href="img/logo.svg" />
</svelte:head>

<section class="h-full w-full flex py-5 justify-center">
	<div class="flex flex-col h-full w-5/6 items-center py-5">
		<div class="flex flex-col w-full gap-5 relative">
			<hr class="w-full opacity-70 z-20">
			<h1 class="font-bold absolute w-max bg-[#1c1c1c] -top-3 px-3 z-20">
				Hot from the bag
			</h1>
			<div class="flex flex-row gap-10 overflow-y-auto w-full whitespace-nowrap 
				relative lg:snap-x z-10 hide-scroll" on:scroll={checkScroll1} id="one">
				{#each Object.values(news) as ar, i}
				<a href={ar.link}>
					<div class="flex flex-col bg-[#39393f] rounded-lg p-3 relative w-max 
						lg:snap-start hover:opacity-80 justify-center items-center">
						<img src={ar.img} alt={"ar-" + i} class="aspect-video w-48 rounded-lg">
						<div class="w-48 py-3 flex flex-col gap-1 break-words">
							<h1 class="font-bold w-full">{ar.head}</h1>
							<p class="opacity-70 text-xs">{ar.author}</p>
						</div>
					</div>
				</a>
				{/each}
			</div>
			<div class="bg-gradient-to-l from-[#1c1c1c] h-full w-[40%] z-10 absolute
				-right-1 items-center justify-center
				{scroll1.pos === scroll1.max ? "hidden" : "flex"}">
				<button on:click={operateScroll1} id="r-1">
					<img src="img/arrow.svg" alt="right" 
					class="h-8 absolute right-0 invert opacity-50 -rotate-90">
				</button>
			</div>
			<div class="bg-gradient-to-r from-[#1c1c1c] h-full w-[40%] z-10 absolute
				-left-1 items-center justify-center
				{scroll1.pos ? "flex" : "hidden"}">
				<button on:click={operateScroll1} id="l-1">
					<img src="img/arrow.svg" alt="left" 
					class="h-8 absolute left-0 invert opacity-50 rotate-90">
				</button>
			</div>
		</div>
	</div>
</section>
