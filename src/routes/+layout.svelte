<script lang="ts">
    import "../app.css";
    import TopNav from '$lib/components/TopNav.svelte';

    import { page } from '$app/stores';
</script>

<div class="flex flex-col h-screen">
    {#if $page.url.pathname !== "/sign"}
        <TopNav/>
        <div class="flex mt-[4.6rem] h-full z-0 overflow-x-hidden overflow-y-auto">
            <slot/>
        </div>
    {:else}
        <div class="h-full z-0 overflow-hidden">
            <slot/>
        </div>
    {/if}
</div>
