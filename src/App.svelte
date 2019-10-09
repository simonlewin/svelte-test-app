<script>
  import ApolloClient from 'apollo-boost';
  import { setClient } from 'svelte-apollo';

  import { Login, Pages } from './pages';

  const client = new ApolloClient({ uri: 'http://localhost:4000' });
  setClient(client);

  let isLoggedIn = true;
</script>

{#if isLoggedIn}
  <Pages />
{:else}
  <Login />
{/if}
