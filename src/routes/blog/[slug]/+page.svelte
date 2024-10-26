<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const { post } = data;

    // Format date for article
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
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
                    {#if post.readingTime}
                        <div class="flex items-center gap-x-4">
                            <div class="h-1 w-1 rounded-full bg-gray-700"></div>
                            <span class="text-gray-400">{post.readingTime} min read</span>
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
            
            <div class="prose-custom">
                {@html post.content}
            </div>

            <!-- Author section if available -->
            {#if post.author?.node}
                <footer class="mt-16 pt-8 border-t border-gray-800">
                    <div class="flex items-center gap-x-4">
                        {#if post.author.node.avatar?.url}
                            <img 
                                src={post.author.node.avatar.url} 
                                alt={post.author.node.name}
                                class="h-12 w-12 rounded-full bg-gray-900"
                            />
                        {/if}
                        <div>
                            <div class="text-base font-medium text-gray-100">
                                {post.author.node.name}
                            </div>
                            {#if post.author.node.description}
                                <div class="text-sm text-gray-400">
                                    {post.author.node.description}
                                </div>
                            {/if}
                        </div>
                    </div>
                </footer>
            {/if}

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