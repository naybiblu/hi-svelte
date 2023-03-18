<script lang="ts">
    import { quill } from "svelte-quill";

    const options = {
        modules: {
            toolbar: '#toolbar'
        },
        placeholder: "There is a specific concern I am about regarding my pet dragon. It is quite..."
    };

    let tagsArr: string[] = [];
    let onTags: string;

    let title: string;
    let tags: string;
    let content: string;

    const addTag = (e: any) => {
        onTags = e.target.value;
        if (tagsArr.length === 5) e.target.value = "";
        if (e.target.value.includes(" ") && /[^ ]/g.test(e.target.value)) {
            const word = e.target.value.replace(" ", "").toLowerCase();
            let container = document.querySelector("#containerTag");
            tagsArr = [...tagsArr, word];
            onTags = "";
            e.target.value = "";
        }
    };
    const removeTag = (e: any) => {
        let container = document.querySelector("#containerTag");
        if (e.keyCode === 8 && !onTags && tagsArr.length !== 0
            || e.keyCode === 8 && tagsArr.length === 5) {
            let input: HTMLInputElement | null = document.querySelector("#textTag");
            input!.value = tagsArr[tagsArr.length - 1];
            tagsArr = tagsArr.filter((tag: string, i: number) => i !== tagsArr.length -1);
        }
    }
    const click2Remove = (e: any) => tagsArr = tagsArr.filter((tag: string) => tag !== e.target.parentNode.parentNode.childNodes[0].data);
    const focus2Tag = (e: any) => {
        let input: HTMLInputElement | null = document.querySelector("#textTag");
        input!.focus();
    }
</script>

<svelte:head>
	<title>Ask | Hi-Svelte</title>
	<link rel="icon" href="img/logo.svg" />
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<svelte:window on:keydown={removeTag}></svelte:window>

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
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="relative flex flex-col w-full bg-white/80 rounded-lg text-black
            h-[3.9rem] py-3 px-5" on:click={focus2Tag}>
            <p class="text-xs opacity-50 font-extrabold">TAGS</p>
            <div class="h-8 w-full flex flex-row gap-2 items-center cursor-text">
                <div class="flex-row flex-wrap z-40 gap-2
                    {tagsArr.length === 0 ? "hidden" : "flex"}" id="containerTag">
                    {#each tagsArr as tag, i}
                        <div class="px-2 py-1 bg-amber-700 text-white rounded-lg font-bold
                        text-xs flex flex-row gap-1 items-center justify-center">
                            {tag}
                            <button on:click={click2Remove} id="tag{i}">
                                <img src="img/wrong.svg" class="h-3 invert opacity-60" alt={tag}>
                            </button>
                        </div>
                    {/each}
                </div>
                <input type="text" placeholder="sveltekit, form validation, dragons"
                    class="h-full w-60 text-xs bg-transparent placeholder:italic outline-none" 
                    on:input={addTag} id="textTag">
            </div>
        </div>
        <hr class="opacity-30">
        <div class="relative text-black h-full pb-5">
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
            <input type="hidden" value={tags}>
            <input type="hidden" value={content}>
            <button class="bg-amber-700 h-16 w-16 px-2 rounded-full font-bold z-50
               hover:bg-[#39393f] fixed bottom-12 right-12 flex items-center justify-center">
               <img src="img/check.svg" alt="post" class="h-8 invert">
            </button> 
        </form>
    </div>
</section>