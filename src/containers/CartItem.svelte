<script>
  import { getClient, query } from 'svelte-apollo';

  import { LaunchTile, Loading } from '../components';

  import { GET_LAUNCH } from '../data/queries';

  export let launchId;

  const client = getClient();

  const launch = query(client, {
    query: GET_LAUNCH,
    variables: { launchId },
  });
</script>

{#await $launch}
  <Loading />
{:then value}
  <LaunchTile launch={value.data.launch} />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
