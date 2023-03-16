<script lang="ts">
    import { quill } from "svelte-quill";

    const options = {
        modules: {
            toolbar: '#toolbar'
        },
        placeholder: "There is a specific concern I am about regarding my pet dragon. It is quite..."
    };

    let title: string;
    let content: string;
</script>

<svelte:head>
	<title>Hi-Svelte | Ask</title>
	<link rel="icon" href="img/logo.svg" />
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<section class="h-full w-full flex justify-center py-5">    
    <div class="h-80 w-5/6 gap-3 flex flex-col">
        <div class="flex flex-col gap-2">
            <h1 class="font-[1000] text-4xl flex flex-row gap-5">
				<span class="text-amber-700">{"<"}</span>
                    Ask the public
                <span class="text-amber-700">{"/>"}</span>
            </h1>
            <p class="font-extralight text-sm opacity-60 break-words">
				Throw a questionable issue or problem on your part and expect an answer!
			</p>
        </div>
        <div class="h-1 w-full"></div>
        <div class="relative flex flex-col text-black">
            <input type="text" placeholder="How to train your dragon?"
                class="h-10 w-full bg-white rounded-lg px-5 pt-10 pb-5 text-xs 
                opacity-80 placeholder:italic outline-none" bind:value={title}>
            <p class="absolute top-3 left-5 text-xs opacity-50 font-extrabold">TITLE</p>
        </div>
        <hr class="opacity-30">
        <div class="relative text-black h-full">
            <div class="relative h-full">
                <div id="toolbar" class="rounded-t-lg z-50 bg-transparent opacity-80
                text-black absolute w-full border-b-black">
                    <div class="gap-5 flex flex-row flex-wrap">
                        <div class="flex flex-row gap-3">
                            <button class="ql-bold"></button>
                            <button class="ql-italic"></button>
                            <button class="ql-underline"></button>
                            <button class="ql-strike"></button>
                        </div>
                        <h1 class="opacity-50 font-extralight h-full">|</h1>
                        <div class="flex flex-row gap-3">
                            <button class="ql-header" value="1"></button>
                            <button class="ql-header" value="2"></button>
                        </div>
                        <h1 class="opacity-50 font-extralight h-full">|</h1>
                        <div class="flex flex-row gap-3">
                            <button class="ql-script" value="sub"></button>
                            <button class="ql-script" value="super"></button>
                        </div>
                        <h1 class="opacity-50 font-extralight h-full">|</h1>
                        <div class="flex flex-row gap-3">
                            <button class="ql-list" value="ordered"></button>
                            <button class="ql-list" value="bullet"></button>
                        </div>
                        <h1 class="opacity-50 font-extralight h-full">|</h1>
                        <div class="flex flex-row gap-3">
                            <button class="ql-blockquote"></button>
                            <button class="ql-code-block"></button>
                            <button class="ql-link"></button>
                        </div>
                    </div>
                </div>
                <div class="editor rounded-lg bg-white opacity-80 text-black pb-2
                text-[Regular] pt-[3.9rem] h-full" 
                use:quill={options} on:text-change={(e) => content = e.detail}/>
            </div>
            <p class="absolute top-[3.6rem] left-4 text-xs opacity-50 font-extrabold z-40">CONTENT</p>
        </div>
        <form>
            <input type="hidden" value={title}>
            <input type="hidden" value={content}>
            <button class="bg-amber-700 h-16 w-16 px-2 rounded-full font-bold z-50
               hover:bg-[#39393f] fixed bottom-12 right-12 flex items-center justify-center">
               <img src="img/check.svg" alt="post" class="h-8 invert">
            </button> 
        </form>
    </div>
</section>