<script>
  import { getClient } from 'svelte-apollo';

  import { LogoutIcon } from '../components/icons';

  const client = getClient();

  const handleClick = () => {
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.clear();
  };
</script>

<style>
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
</style>

<button on:click={handleClick}>
  <LogoutIcon />
</button>
