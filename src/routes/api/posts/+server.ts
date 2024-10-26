import { json } from '@sveltejs/kit';
import { client } from '$lib/graphql/client';
import { GET_POSTS } from '$lib/graphql/queries';

export const GET = async () => {
    try {
        const { data } = await client.query({
            query: GET_POSTS
        });
        
        return json(data.posts.nodes);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
};