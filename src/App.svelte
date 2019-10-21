<script>
  import ApolloClient from 'apollo-boost';
  import { InMemoryCache } from 'apollo-cache-inmemory';
  import { setClient } from 'svelte-apollo';

  import { Login, Pages } from './pages';

  import { resolvers, typeDefs } from './resolvers';

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    // resolvers,
    typeDefs,
    uri: 'http://localhost:4000',
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
