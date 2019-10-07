<script>
  import { setClient } from 'svelte-apollo';
  import { client } from './data';
  import Launches from './Launches.svelte';
  import Header from './Header.svelte';

  setClient(client);
</script>

<div>
  <Header />
  <Launches />
</div>
