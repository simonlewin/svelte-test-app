<script>
  import { getClient, query } from 'svelte-apollo';

  import { Header, LaunchDetail, Loading } from '../components';
  import { ActionButton } from '../containers';

  import { GET_LAUNCH_DETAILS } from '../data/queries';

  export let launchId;
  export let location = undefined;

  const client = getClient();

  const launch = query(client, {
    query: GET_LAUNCH_DETAILS,
    variables: { launchId },
  });
</script>

{#await $launch}
  <Loading />
{:then value}
  <Header image={value.data.launch.mission.missionPatch}>
    {value.data.launch.mission.name}
  </Header>
  <LaunchDetail launch={value.data.launch} />
  <ActionButton launch={value.data.launch} />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
