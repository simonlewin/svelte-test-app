<script>
  import { client } from './data';
  import { setClient } from 'svelte-apollo';
  import Launches from './Launches.svelte';

  setClient(client);
</script>

<div>
  <h1>Launches</h1>

  <Launches />
</div>
