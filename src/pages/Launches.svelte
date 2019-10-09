<script>
  import { onMount } from 'svelte';
  import { getClient, query } from 'svelte-apollo';

  import { Button, Header, LaunchTile } from '../components';

  import { GET_LAUNCHES } from '../data/queries';

  const client = getClient();

  let launches = [];

  const getLaunches = query(client, { query: GET_LAUNCHES });

  onMount(async () => {
    const { data } = await $getLaunches;
    launches = data.launches.launches;
  });

  const handleClick = ({ type }) => {
    console.log(type);
  };
</script>

<Header />

{#if launches.length === 0}
  <p>Loading...</p>
{:else}
  {#each launches as launch}
    <LaunchTile {launch} />
  {:else}
    <li>No launches found</li>
  {/each}
{/if}

<Button on:click={handleClick}>Load More</Button>
