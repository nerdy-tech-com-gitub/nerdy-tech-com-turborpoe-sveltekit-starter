import { client } from '$lib/graphql/client';
import { GET_POST_BY_SLUG } from '$lib/graphql/queries';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    try {
        const { data } = await client.query({
            query: GET_POST_BY_SLUG,
            variables: { slug: params.slug }
        });

        if (!data.post) {
            throw error(404, 'Post not found');
        }

        return {
            post: data.post
        };
    } catch (e) {
        console.error('Error loading post:', e);
        throw error(500, 'Error loading post');
    }
};