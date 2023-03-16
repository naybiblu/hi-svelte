<script lang="ts">
    export let wideTxt = false;
    let selectedTxt: string | null;
    let allTxt: string | null;

    const bold = () => {

    }
    const gText = (e: any) => {
        const { target } = e;
        selectedTxt = target.value.substring(target.selectionStart, target.selectionEnd);
        allTxt = e.target.innerHTML;
    }
</script>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>

<div class="h-full w-max flex flex-col gap-5">
    <div class="w-full h-10 flex flex-row bg-[#39393f] rounded-xl gap-5 items-center text-white
        px-5 text-lg">
        <input type="number" min="1" max="100" value="1" 
            class="bg-transparent outline-none text-center font-bold">
        <h1 class="font-bold opacity-50">|</h1>
        <div class="w-max flex flex-row gap-3 items-center">
            <button class="font-extrabold h-full w-8 hover:opacity-60" on:click={bold}>B</button>
            <button class="italic h-full w-8 hover:opacity-60">i</button>
            <button class="underline h-full w-8 hover:opacity-60">U</button>
        </div>
        <h1 class="font-bold opacity-50">|</h1>
        <div class="w-max flex flex-row gap-3 items-center">
            <button class="flex h-full w-8 hover:opacity-60 items-center justify-center">
                <img src="img/text_justify.svg" alt="textJustify" class="h-5 invert">
            </button>
            <button class="flex h-full w-8 hover:opacity-60 items-center justify-center">
                <img src="img/text_left.svg" alt="textLeft" class="h-5 invert">
            </button>
            <button class="flex h-full w-8 hover:opacity-60 items-center justify-center">
                <img src="img/text_center.svg" alt="textCenter" class="h-5 invert">
            </button>
            <button class="flex h-full w-8 hover:opacity-60 items-center justify-center">
                <img src="img/text_right.svg" alt="textRight" class="h-5 invert">
            </button>
        </div>
        <h1 class="font-bold opacity-50">|</h1>
        <input type="color" class="bg-transparent">
    </div>
    <textarea class="bg-[#39393f] p-5" on:select={gText}></textarea>
</div>