<script>
  import { getClient, mutate } from 'svelte-apollo';

  import { Button } from '../components';

  import { GET_LAUNCH } from '../data/queries';
  import { BOOK_TRIPS } from '../data/mutations';

  export let cartItems = [];

  const client = getClient();

  const handleClick = async () => {
    await mutate(client, {
      mutation: BOOK_TRIPS,
      variables: { launchIds: cartItems },
      refetchQueries: cartItems.map(launchId => ({
        query: GET_LAUNCH,
        variables: { launchId },
      })),

      update(cache) {
        cache.writeData({ data: { cartItems: [] } });
      },
    });
  };
</script>

<Button on:click={handleClick}>Book All</Button>
