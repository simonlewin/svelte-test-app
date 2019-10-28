<script>
  import { getClient, query } from 'svelte-apollo';

  import { Button, Header, LaunchTile, Loading } from '../components';

  import { GET_LAUNCHES } from '../data/queries';

  const client = getClient();

  const launches = query(client, { query: GET_LAUNCHES });

  const handleClick = ({ data }) =>
    launches.fetchMore({
      variables: {
        after: data.launches.cursor,
      },

      updateQuery: (prev, { fetchMoreResult, ...rest }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...fetchMoreResult,
          launches: {
            ...fetchMoreResult.launches,
            launches: [
              ...prev.launches.launches,
              ...fetchMoreResult.launches.launches,
            ],
          },
        };
      },
    });
</script>

{#await $launches}
  <Loading />
{:then value}
  <Header />
  {#each value.data.launches.launches as launch}
    <LaunchTile {launch} />
  {:else}
    <li>No launches found</li>
  {/each}
  {#if value.data.launches.hasMore}
    <Button on:click={() => handleClick(value)}>Load More</Button>
  {/if}
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
