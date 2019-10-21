<script>
  import { getClient, query } from 'svelte-apollo';

  import { Header, Loading } from '../components';

  import { GET_CART_ITEMS } from '../data/queries';

  const client = getClient();

  const getCartItems = query(client, { query: GET_CART_ITEMS });
</script>

<Header>My Cart</Header>

{#await $getCartItems}
  <Loading />
{:then data}
  {#each data.data.cartItems as item}
    {item}
  {:else}
    <p>No items in your cart</p>
  {/each}
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
