<script lang="ts">
    let typed: string;

    const reset = () => typed = "";
</script>

<section class="w-full h-[4.5rem] flex fixed top-0 left-0 items-center px-20 justify-between bg-[#1c1c1c]
    shadow-lg">
    <a href="/" class="w-max h-max">
        <div class="flex gap-5 items-center tracking-[0.5rem] font-extrabold">
            <img src="img/logo.svg" alt="hisvelte" class="h-10"/>
            <p class="font-[1000]">HI-SVELTE</p>
	    </div>  
    </a>
    <form class="flex items-center justify-center relative">
        <input type="text" placeholder="Search a solution..."
            class="h-10 w-[30rem] px-5 rounded-l-full border-white/5 border bg-transparent 
            focus:border-white outline-none" bind:value={typed}>
        {#if typed}
            <button class="rounded-r-full h-10 px-5 absolute right-12" type="reset" on:click={reset}>
                <img src="img/wrong.svg" alt="wrong" class="h-5 invert opacity-70">
            </button>
        {/if}
        <button class="bg-[#39393f] rounded-r-full h-10 px-5 flex items-center justify-center">
            <img src="img/search.svg" alt="search" class="h-5 invert opacity-70">
        </button>
    </form>
    <div class="flex gap-5">
        <a href="/ask" class="h-10">
           <button class="bg-amber-700 h-full px-8 rounded-full font-bold
           hover:bg-[#39393f]">Ask</button> 
        </a>
        <img src="img/logo.png" alt="user" class="h-10 rounded-full"/>
    </div>
</section>