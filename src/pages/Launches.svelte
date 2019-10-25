<script>
  import { getClient, query } from 'svelte-apollo';

  import { Button, Header, LaunchTile, Loading } from '../components';

  import { GET_LAUNCHES } from '../data/queries';

  const client = getClient();

  const launches = query(client, { query: GET_LAUNCHES });

  // TODO
  const handleClick = ({ type }) => {
    console.log(type);
  };
</script>

<Header />

{#await $launches}
  <Loading />
{:then value}
  {#each value.data.launches.launches as launch}
    <LaunchTile {launch} />
  {:else}
    <li>No launches found</li>
  {/each}
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}

<Button on:click={handleClick}>Load More</Button>
