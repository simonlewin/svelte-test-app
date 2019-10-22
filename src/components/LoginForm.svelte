<script>
  import { Button } from './';

  let email = 'name@address.com';
  export let login;

  const onSubmit = event => {
    event.preventDefault();
    login(email);
  };
</script>

<!-- <input bind:value={email} /> -->
<Button on:click={onSubmit}>Log in</Button>
