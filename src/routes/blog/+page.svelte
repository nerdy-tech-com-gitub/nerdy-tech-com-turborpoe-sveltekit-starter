<script lang="ts">
    import type { PageData } from './$types';
    import PostCard from '$lib/components/blog/PostCard.svelte';
    
    export let data: PageData;
    const { posts } = data;
</script>

<div class="min-h-screen bg-gray-950">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="space-y-8 lg:space-y-12">
            <header class="max-w-2xl">
                <h1 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                    Latest Posts
                </h1>
                <p class="mt-4 text-lg text-gray-400">
                    Articles and thoughts on software development, technology, and building cool things.
                </p>
            </header>

            {#if posts?.length > 0}
                <div class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {#each posts as post}
                        <PostCard {post} />
                    {/each}
                </div>
            {:else}
                <div class="text-center">
                    <p class="text-lg text-gray-400">No posts found.</p>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    :global(html) {
        background-color: #111827;
    }
</style>