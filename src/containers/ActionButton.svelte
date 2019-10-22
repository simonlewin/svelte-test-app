<script>
  import { getClient, mutate } from 'svelte-apollo';

  import { Button } from '../components';

  import { GET_LAUNCH_DETAILS } from '../data/queries';
  import { CANCEL_TRIP, TOGGLE_CART } from '../data/mutations';

  export let launch = undefined;

  const client = getClient();
  const { id, isBooked, isInCart } = launch;

  const handleClick = async () => {
    await mutate(client, {
      mutation: isBooked ? CANCEL_TRIP: TOGGLE_CART,
      variables: { launchId: id },
      refetchQueries: [
        {
          query: GET_LAUNCH_DETAILS,
          variables: { launchId: id },
        },
      ],
    });
  };
</script>

<Button on:click={handleClick}>
  {isBooked ? 'Cancel this Trip' : isInCart ? 'Remove from Cart' : 'Add to Cart'}
</Button>
