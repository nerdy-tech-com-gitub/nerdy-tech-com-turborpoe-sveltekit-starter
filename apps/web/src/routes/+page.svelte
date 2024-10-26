<script>
    const posts = [
        {
            title: "Building Modern Web Applications",
            excerpt: "A deep dive into modern web development practices, performance optimization, and user experience design.",
            date: "2024-01-15",
            slug: "building-modern-web-applications",
            categories: {
                nodes: [
                    { name: "Development" },
                    { name: "Web" }
                ]
            },
            readingTime: "8"
        },
        {
            title: "The Future of Cloud Computing",
            excerpt: "Exploring upcoming trends in cloud technology, serverless architecture, and distributed systems.",
            date: "2024-01-10",
            slug: "future-of-cloud-computing",
            categories: {
                nodes: [
                    { name: "Cloud" },
                    { name: "Technology" }
                ]
            },
            readingTime: "6"
        }
    ];
</script>

<div class="min-h-screen bg-gray-950">
    <header class="border-b border-gray-800">
        <div class="max-w-7xl mx-auto">
            <div class="flex h-16 items-center justify-between px-4">
                <div class="flex items-center gap-8">
                    <a href="/" class="text-brand-400 font-bold">NerdyTech</a>
                    <nav class="hidden md:block">
                        <ul class="flex gap-6">
                            <li><a href="/" class="nav-link active">Blog</a></li>
                            <li><a href="/about" class="nav-link">About</a></li>
                            <li><a href="/contact" class="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <a href="/contact" class="btn-primary">Get in Touch</a>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="max-w-4xl mx-auto px-4 py-16">
            <header class="mb-16">
                <h1 class="text-4xl font-bold tracking-tight text-gray-100">Latest Articles</h1>
                <p class="mt-4 text-lg text-gray-400">
                    Thoughts on software development, technology, and building digital products.
                </p>
            </header>
            
            <div class="space-y-12">
                {#each posts as post}
                    <article class="relative group">
                        <div class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-gray-900/50 transition duration-300"></div>
                        <a href="/blog/{post.slug}" class="relative">                            
                            <div class="relative">
                                <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
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
                                    {#if post.readingTime}
                                        <div class="flex items-center gap-x-4">
                                            <div class="h-1 w-1 rounded-full bg-gray-700"></div>
                                            <span class="text-gray-400">{post.readingTime} min read</span>
                                        </div>
                                    {/if}
                                </div>

                                <h2 class="text-2xl font-bold text-gray-100 group-hover:text-brand-400 transition duration-300">
                                    {post.title}
                                </h2>

                                <div class="mt-4 text-base text-gray-400">
                                    {post.excerpt}
                                </div>

                                <div class="relative z-10 mt-4 flex items-center text-sm font-medium text-brand-400">
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
    </main>
</div>
