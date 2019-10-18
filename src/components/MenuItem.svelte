<script>
  import { navigateTo } from 'svero';

  export let to = '/';

  const handleClick = () => navigateTo(to);
</script>

<style>
  div {
    display: inline-block;
    padding: 0;
    font-size: 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;
  }
</style>

<div on:click={handleClick}>
  <slot />
</div>
