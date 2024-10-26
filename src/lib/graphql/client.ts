import { ApolloClient, InMemoryCache } from '@apollo/client';
import { env } from '$env/dynamic/public';

export const client = new ApolloClient({
    uri: env.PUBLIC_WORDPRESS_API_URL,
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});