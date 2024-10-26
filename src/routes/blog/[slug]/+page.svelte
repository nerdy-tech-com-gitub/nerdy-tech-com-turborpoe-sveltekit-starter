<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const { post } = data;
</script>

<article class="max-w-4xl mx-auto px-4 py-8">
    {#if post.featuredImage?.node}
        <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            class="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
        />
    {/if}
    
    <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
    
    <div class="prose prose-lg max-w-none">
        {@html post.content}
    </div>
</article>