<script lang="ts">
import type { PageData } from './$types';

export let data: PageData;
const { post } = data;

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>

<article class="min-h-screen bg-gray-950">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-3xl">
            <header class="space-y-6">
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

                <h1 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">
                    {post.title}
                </h1>

                {#if post.excerpt}
                    <div class="text-xl text-gray-400">
                        {@html post.excerpt}
                    </div>
                {/if}
            </header>

            {#if post.featuredImage?.node}
                <div class="relative mt-10 aspect-video overflow-hidden rounded-lg">
                    <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        class="h-full w-full object-cover object-center"
                    />
                </div>
            {/if}

            <div class="prose prose-invert mx-auto mt-10 max-w-none">
                {@html post.content}
            </div>

            <footer class="mt-16 border-t border-gray-800 pt-8">
                <a 
                    href="/blog"
                    class="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                >
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                    </svg>
                    Back to blog
                </a>
            </footer>
        </div>
    </div>
</article>

<style>
    /* Prose styles */
    :global(.prose) {
        @apply text-gray-300;
    }
    :global(.prose strong) {
        @apply text-gray-100;
        font-weight: 600;
    }
    :global(.prose a) {
        @apply text-blue-400 no-underline hover:text-blue-300;
    }
    :global(.prose h1),
    :global(.prose h2),
    :global(.prose h3),
    :global(.prose h4) {
        @apply text-gray-100 font-bold;
    }
    :global(.prose code) {
        @apply text-gray-100 bg-gray-800 px-1.5 py-0.5 rounded-md text-sm;
    }
    :global(.prose pre) {
        @apply bg-gray-800 rounded-lg p-4;
    }
    :global(.prose img) {
        @apply rounded-lg;
    }
    :global(.prose blockquote) {
        @apply border-l-4 border-gray-700;
    }
    :global(.prose blockquote p) {
        @apply text-gray-400;
    }
    :global(.prose hr) {
        @apply border-gray-800;
    }
    :global(.prose thead) {
        @apply text-gray-100;
    }
    :global(.prose tbody tr) {
        @apply border-gray-800;
    }
    :global(.prose tbody td) {
        @apply text-gray-300;
    }
    :global(.prose ul li::before) {
        @apply bg-gray-500;
    }
    :global(.prose ol li::before) {
        @apply text-gray-500;
    }
</style>