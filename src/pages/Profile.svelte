<script>
  import { getClient, query } from 'svelte-apollo';

  import { Header, LaunchTile, Loading } from '../components';

  import { GET_MY_TRIPS } from '../data/queries';

  const client = getClient();

  const getTrips = query(client, {
    query: GET_MY_TRIPS,
    fetchPolicy: 'network-only',
  });
</script>

<Header>My Trips</Header>

{#await $getTrips}
  <Loading />
{:then value}
  {#if value.data.me.trips.length !== 0}
    {#each value.data.me.trips as launch}
      <LaunchTile {launch} />
    {/each}
  {:else}
    <p>You haven't booked any trips</p>
  {/if}
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
