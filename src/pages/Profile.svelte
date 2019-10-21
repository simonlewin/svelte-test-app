<script>
  import { onMount } from 'svelte';
  import { getClient, query } from 'svelte-apollo';

  import { Header, LaunchTile, Loading } from '../components';

  import { GET_MY_TRIPS } from '../data/queries';

  const client = getClient();

  let trips = [];

  const getTrips = query(client, { query: GET_MY_TRIPS });

  onMount(async () => {
    const { data } = await $getTrips;
    trips = data.me.trips;
  });
</script>

<Header>My Trips</Header>

{#if trips.length === 0}
  <Loading />
{:else}
  {#each trips as launch}
    <LaunchTile {launch} />
  {:else}
    <p>>You haven't booked any trips</p>
  {/each}
{/if}
