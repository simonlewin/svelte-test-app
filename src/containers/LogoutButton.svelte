<script>
  import { getClient } from 'svelte-apollo';

  import { Button } from '../components';
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
  }
</style>

<button on:click={handleClick}>
  <LogoutIcon />
</button>
