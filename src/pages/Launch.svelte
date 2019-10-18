<script>
  import { getClient, query } from 'svelte-apollo';

  import { Header, LaunchDetail } from '../components';

  import { GET_LAUNCH_DETAILS } from '../data/queries';

  export let router = {};

  const client = getClient();

  const { launchId } = router.params;

  const launch = query(client, {
    query: GET_LAUNCH_DETAILS,
    variables: { launchId },
  });
</script>

{#await $launch}
  <p>Loading...</p>
{:then data}
  <Header image={data.data.launch.mission.missionPatch}>
    {data.data.launch.mission.name}
  </Header>
  <LaunchDetail launch={data.data.launch} />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
