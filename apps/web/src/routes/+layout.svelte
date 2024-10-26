<script>
    import "../app.css";
</script>

<div class="min-h-screen bg-gray-950">
    <header class="border-b border-gray-800">
        <div class="max-w-7xl mx-auto">
            <div class="flex h-16 items-center justify-between px-4">
                <div class="flex items-center gap-8">
                    <a href="/" class="text-blue-400 font-bold">NerdyTech</a>
                    <nav class="hidden md:block">
                        <ul class="flex gap-6">
                            <li>
                                <a 
                                    href="/" 
                                    class="relative py-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-gray-100"
                                    class:active={$page?.route?.id === '/'}
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/about"
                                    class="relative py-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-gray-100"
                                    class:active={$page?.route?.id === '/about'}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/contact"
                                    class="relative py-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-gray-100"
                                    class:active={$page?.route?.id === '/contact'}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <a 
                        href="/contact" 
                        class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    </header>

    <slot />
</div>

<style>
    :global(html) {
        color-scheme: dark;
        background-color: rgb(3, 7, 18);
    }
    
    .active {
        @apply text-gray-100;
    }

    .active::after {
        content: '';
        @apply absolute bottom-0 left-0 h-0.5 w-full bg-blue-400;
    }
</style>