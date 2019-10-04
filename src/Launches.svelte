<script>
  import { getClient, query } from 'svelte-apollo';
  import { LAUNCHES } from './data';
  import Launch from './Launch.svelte';

  const client = getClient();

  const launches = query(client, { query: LAUNCHES });
</script>

<ul>
  {#await $launches}
    <li>Loading...</li>
  {:then result}
    {#each result.data.launches.launches as launch}
      <Launch {launch} />
    {:else}
      <li>No launches found</li>
    {/each}
  {:catch error}
    <li>Error loading launches: {error}</li>
  {/await}
</ul>
