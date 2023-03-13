<script lang="ts">
    import "../app.css";
    import TopNav from '$lib/components/TopNav.svelte';

    import { page } from '$app/stores';
</script>

<div class="relative h-full w-full 
    {$page.url.pathname !== "/signin" ? "overflow-x-hidden" : "overflow-hidden"}">
    {#if $page.url.pathname !== "/signin"}
        <TopNav/>
    {/if}
    <slot />
</div>
