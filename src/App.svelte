<script>
  import ApolloClient from 'apollo-client';
  import { InMemoryCache } from 'apollo-cache-inmemory';
  import { HttpLink } from "apollo-link-http";
  import { setClient } from 'svelte-apollo';

  import { Login, Pages } from './pages';

  import { resolvers, typeDefs } from './resolvers';

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
      cartItems: [],
    },
  });

  setClient(client);

  let isLoggedIn = true;
</script>

{#if isLoggedIn}
  <Pages />
{:else}
  <Login />
{/if}
