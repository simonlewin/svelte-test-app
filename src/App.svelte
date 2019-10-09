<script>
  import { setClient } from 'svelte-apollo';
  import { client } from './data';
  import { Login, Pages } from './pages';

  setClient(client);

  let isLoggedIn = true;
</script>

{#if isLoggedIn}
  <Pages />
{:else}
  <Login />
{/if}
