<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const { posts } = data;
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each posts as post}
            <a 
                href="/blog/{post.slug}"
                class="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
                {#if post.featuredImage?.node}
                    <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        class="w-full h-48 object-cover"
                    />
                {/if}
                
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">{post.title}</h2>
                    <div class="text-gray-600">
                        {@html post.excerpt}
                    </div>
                    <div class="mt-4 text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>