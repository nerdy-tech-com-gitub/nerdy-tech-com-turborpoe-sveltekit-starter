<script lang="ts">
import type { PageData } from './$types';
import Date from '$lib/components/Date.svelte';
import { cn } from '$lib/utils';

export let data: PageData;
const { posts } = data;

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>

<div class="min-h-screen bg-gray-950 pb-16">
    <div class="max-w-4xl mx-auto px-4 pt-16">
        <header class="mb-16">
            <h1 class="text-4xl font-bold tracking-tight text-gray-100">Blog</h1>
            <p class="mt-4 text-lg text-gray-400">
                Thoughts on software development, technology, and building digital products.
            </p>
        </header>
        
        <div class="space-y-12">
            {#each posts as post}
                <article class="group">
                    <a href="/blog/{post.slug}" class="relative flex flex-col space-y-4">
                        {#if post.featuredImage?.node}
                            <figure class="relative aspect-video overflow-hidden bg-gray-900/50 rounded-lg">
                                <img
                                    src={post.featuredImage.node.sourceUrl}
                                    alt={post.featuredImage.node.altText || post.title}
                                    class="aspect-video w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
                                />
                            </figure>
                        {/if}
                        
                        <div class="grow space-y-4">
                            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                                <time datetime={post.date} class="text-gray-400">
                                    {formatDate(post.date)}
                                </time>
                                {#if post.categories?.nodes?.length}
                                    <div class="flex items-center gap-x-4">
                                        <div class="h-1 w-1 rounded-full bg-gray-700"></div>
                                        <div class="flex gap-x-2">
                                            {#each post.categories.nodes as category}
                                                <span class="text-gray-400">{category.name}</span>
                                            {/each}
                                        </div>
                                    </div>
                                {/if}
                            </div>

                            <h2 class="text-2xl font-bold text-gray-100 group-hover:text-brand-400 transition duration-300">
                                {post.title}
                            </h2>

                            <div class="text-base text-gray-400">
                                {@html post.excerpt}
                            </div>

                            <div class="relative z-10 flex items-center text-sm font-medium text-brand-400">
                                <span class="transition duration-300 group-hover:translate-x-2">
                                    Read article →
                                </span>
                            </div>
                        </div>
                    </a>
                </article>
            {/each}
        </div>
    </div>
</div>

<style>
    .text-brand-400 {
        color: #60A5FA;
    }
    .text-brand-300 {
        color: #93C5FD;
    }
</style>