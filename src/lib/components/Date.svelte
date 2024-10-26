<script lang="ts">
export let value: string | Date;

function formatDate(date: string | Date): string {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>

<time datetime={value.toString()} class="text-gray-400">
    {formatDate(value)}
</time>