<script>
    let title = "NerdyTech";
    let description = "Thoughts on software development, technology, and building digital products.";

    const posts = [
        {
            title: "Building Modern Web Applications",
            excerpt: "A deep dive into modern web development practices, performance optimization, and user experience design.",
            date: "2024-01-14",
            slug: "building-modern-web-applications",
            categories: {
                nodes: [
                    { name: "Development" },
                    { name: "Web" }
                ]
            },
            readingTime: "8 min read"
        },
        {
            title: "The Future of Cloud Computing",
            excerpt: "Exploring upcoming trends in cloud technology, serverless architecture, and distributed systems.",
            date: "2024-01-09",
            slug: "future-of-cloud-computing",
            categories: {
                nodes: [
                    { name: "Cloud" },
                    { name: "Technology" }
                ]
            },
            readingTime: "6 min read"
        }
    ];
</script>

<main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div class="space-y-12">
        <div class="max-w-2xl">
            <h1 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                {title}
            </h1>
            <p class="mt-4 text-lg text-gray-400">
                {description}
            </p>
        </div>

        <div class="space-y-10 lg:space-y-12">
            {#each posts as post}
                <article class="group relative flex flex-col space-y-4 rounded-lg border border-gray-800 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/50">
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        <time datetime={post.date} class="text-gray-400">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
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
                        <div class="flex items-center gap-x-4">
                            <div class="h-1 w-1 rounded-full bg-gray-700"></div>
                            <span class="text-gray-400">{post.readingTime}</span>
                        </div>
                    </div>

                    <h2 class="text-2xl font-bold tracking-tight text-gray-100 transition-colors group-hover:text-blue-400">
                        <a href="/blog/{post.slug}" class="outline-none focus:underline">
                            {post.title}
                        </a>
                    </h2>

                    <p class="text-lg leading-relaxed text-gray-400">
                        {post.excerpt}
                    </p>

                    <div>
                        <a 
                            href="/blog/{post.slug}" 
                            class="inline-flex items-center gap-2 text-sm font-medium text-blue-400 outline-none transition-colors hover:text-blue-300 focus:underline"
                        >
                            Read article
                            <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</main>
