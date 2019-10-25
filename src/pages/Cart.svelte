<script>
  import { getClient, query } from 'svelte-apollo';

  import { Header, Loading } from '../components';
  import { BookTrips, CartItem } from '../containers';

  import { GET_CART_ITEMS } from '../data/queries';

  const client = getClient();

  const getCartItems = query(client, { query: GET_CART_ITEMS });
</script>

{#await $getCartItems}
  <Loading />
{:then value}
  <Header>My Cart</Header>
  {#if value.data.cartItems.length !== 0}
    {#each value.data.cartItems as launchId}
      <CartItem {launchId} />
    {/each}
    <BookTrips cartItems={value.data.cartItems} />
  {:else}
    <p>No items in your cart</p>
  {/if}
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
