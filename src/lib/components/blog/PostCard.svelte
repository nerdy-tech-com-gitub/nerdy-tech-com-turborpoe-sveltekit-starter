<script lang="ts">
export let post: {
    title: string;
    slug: string;
    excerpt?: string;
    date: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
            altText?: string;
        }
    };
    categories?: {
        nodes: {
            name: string;
        }[];
    };
};

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>

<article class="group flex flex-col">
    <a href="/blog/{post.slug}" class="relative flex flex-col space-y-4">
        {#if post.featuredImage?.node}
            <div class="relative aspect-video overflow-hidden rounded-lg">
                <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    class="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                    loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
        {/if}

        <div class="flex flex-col space-y-4">
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

            <h2 class="text-2xl font-bold leading-tight text-gray-100 transition-colors duration-300 group-hover:text-blue-400">
                {post.title}
            </h2>

            {#if post.excerpt}
                <div class="line-clamp-3 text-base text-gray-400">
                    {@html post.excerpt}
                </div>
            {/if}

            <div class="flex items-center gap-2 text-sm font-medium text-blue-400">
                Read article
                <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </a>
</article>