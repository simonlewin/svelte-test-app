<script>
  import ApolloClient from 'apollo-client';
  import { InMemoryCache } from 'apollo-cache-inmemory';
  import { HttpLink } from 'apollo-link-http';
  import { setClient, query } from 'svelte-apollo';

  import { Login, Pages } from './pages';

  import { resolvers, typeDefs } from './resolvers';
  import { IS_LOGGED_IN } from './data/queries';

  const cache = new InMemoryCache();

  const link = new HttpLink({
    uri: 'http://localhost:4000/',
    headers: {
      authorization: localStorage.getItem('token'),
      'client-name': 'Space Explorer [web]',
      'client-version': '1.0.0',
    },
  });

  const client = new ApolloClient({
    cache,
    link,
    resolvers,
    typeDefs,
  });

  cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
      cartItems: [],
    },
  });

  setClient(client);

  const isLoggedIn = query(client, {
    query: IS_LOGGED_IN,
  });
</script>

{#await $isLoggedIn then value}
  {#if value.data.isLoggedIn}
    <Pages />
  {:else}
    <Login />
  {/if}
{/await}
