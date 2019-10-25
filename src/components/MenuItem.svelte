<script>
  import { navigate } from 'svelte-routing';

  export let to = '/';

  const handleClick = () => navigate(to);
</script>

<style>
  div {
    flex-grow: 1;
    width: 0;
    display: inline-block;
    padding: 0;
    font-size: 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
  }
</style>

<div on:click={handleClick}>
  <slot />
</div>
