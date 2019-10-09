<script>
  export let image;

  const avatars = ['dog-1', 'dog-2', 'dog-3'];
  const email = 'test@email.com';

  $: avatar = `/assets/images/${
    avatars[Math.floor(Math.random() * Math.floor(avatars.length))]
  }.png`;
</script>

<style>
  div {
    display: flex;
    align-items: center;
    margin-bottom: calc(var(--unit) * 4.5);
  }

  div div {
    display: inline-block;
  }

  img {
    height: 134px;
    margin-right: calc(var(--unit) * 2.5);
  }

  img.round {
    border-radius: 50%;
  }

  h5 {
    margin-top: calc(var(--unit) / 2);
    color: var(--text-secondary);
  }
</style>

<div>
  {#if image}
    <img src={image} alt="Mission patch" />
  {:else}
    <img class="round" src={avatar} alt="Space dog" />
  {/if}
  <div>
    <h2>
      <slot>Space Explorer</slot>
    </h2>
    <h5>{email}</h5>
  </div>
</div>
