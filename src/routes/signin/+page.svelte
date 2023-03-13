<script lang="ts">

	let x: any, y: any, xy: any;
	const cursor = (e: any) => {
		const { target } = e;
		x = e.pageX - target.offsetLeft;
		y = e.pageY - target.offsetTop;
		xy = x + " " + y;
		console.log(x, y, xy)
	}
</script>

<svelte:head>
	<title>Hi-Svelte | Sign In</title>
	<link rel="icon" href="img/logo.svg" />
</svelte:head>

<section class="h-full w-full flex">
	<div class="h-full w-1/3 bg-white justify-self-end z-50 text-[#1c1c1c]
		flex flex-col items-center justify-center text-5xl gap-10">
		<div class="flex text-center flex-col gap-3">
			<h1 class="font-[1000]">
				<span class="text-amber-700">{"<"}</span>
				Sign In
				<span class="text-amber-700">{"/>"}</span>
			</h1>
			<p class="font-extralight text-sm opacity-60 break-words w-60">
				### Join us in the quest of helping SvelteDevs or ... maybe not?
			</p>
		</div>
		<form class="flex flex-col gap-5 bg-[#1c1c1c] w-5/6 h-max p-5 rounded-lg
			text-base items-center justify-center">
			<input type="email" name="email" placeholder="Email"
				class="outline-none rounded-full px-5 w-full h-10">
			<input type="password" name="pass" placeholder="Password"
				class="outline-none rounded-full px-5 w-full h-10">
		</form>
	</div>
	<div class="h-full w-2/3 bg-[#1c1c1c] justify-self-start" on:pointermove={cursor}>
		<div class="h-full w-full bg-[-webkit-gradient('radial, {xy}, 0, {xy}, 100 from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), #1c1c1c')]"></div>
		<img src="../img/logo.svg" alt="hisquared" 
			class="absolute h-72 -bottom-20 -right-10 z-20 animate-ping opacity-50">
		<img src="../img/logo.svg" alt="hisquared" 
			class="absolute h-72 -bottom-20 -right-10 z-30">
		<h1 class="absolute w-full font-extrabold text-xl break-normal z-10 opacity-75">
			{#each "HiSvelte ".repeat(1000).toUpperCase()
			.split(" ") as word, i}
				<span>
					{word.split("").join(" ")}
				</span>{" "}
			{/each}
			<!--{"HiSvelte ".repeat(1000).toUpperCase()
			.split("").join(" ")}-->
		</h1>
	</div>
</section>