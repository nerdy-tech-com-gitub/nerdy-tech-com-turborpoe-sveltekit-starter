<script lang="ts">
import type { PageData } from './$types';

export let data: PageData;
const { post } = data;

// Format date for article
function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>

<div class="min-h-screen bg-gray-950">
    <div class="max-w-4xl mx-auto px-4 py-16">
        <article class="relative pt-8">
            <header class="mb-16">
                <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm">
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

                <h1 class="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
                    {post.title}
                </h1>

                {#if post.excerpt}
                    <div class="mt-6 text-lg text-gray-400">
                        {@html post.excerpt}
                    </div>
                {/if}
            </header>
            
            {#if post.featuredImage?.node}
                <div class="relative aspect-[16/9] mb-16">
                    <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        class="rounded-lg object-cover bg-gray-900"
                    />
                </div>
            {/if}
            
            <div class="prose prose-invert max-w-none">
                {@html post.content}
            </div>

            <div class="mt-16 border-t border-gray-800 pt-8">
                <a 
                    href="/blog" 
                    class="inline-flex items-center gap-x-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                >
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                    </svg>
                    Back to blog
                </a>
            </div>
        </article>
    </div>
</div>

<style>
    :global(.prose) {
        color: #D1D5DB; /* text-gray-300 */
    }
    :global(.prose strong) {
        color: #F3F4F6; /* text-gray-100 */
    }
    :global(.prose a) {
        color: #60A5FA; /* text-brand-400 */
    }
    :global(.prose h1),
    :global(.prose h2),
    :global(.prose h3),
    :global(.prose h4) {
        color: #F3F4F6; /* text-gray-100 */
    }
    :global(.prose code) {
        color: #F3F4F6; /* text-gray-100 */
        background-color: #374151; /* bg-gray-700 */
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
    }
    :global(.prose pre) {
        background-color: #1F2937; /* bg-gray-800 */
        border-radius: 0.5rem;
        padding: 1rem;
    }
    :global(.prose img) {
        border-radius: 0.5rem;
    }
    :global(.prose blockquote) {
        border-left-color: #4B5563; /* border-gray-600 */
        color: #9CA3AF; /* text-gray-400 */
    }
    :global(.prose hr) {
        border-color: #374151; /* border-gray-700 */
    }
    :global(.prose ul),
    :global(.prose ol) {
        margin-top: 1.25em;
        margin-bottom: 1.25em;
    }
    :global(.prose li) {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    :global(.prose > :first-child) {
        margin-top: 0;
    }
    :global(.prose > :last-child) {
        margin-bottom: 0;
    }
</style>