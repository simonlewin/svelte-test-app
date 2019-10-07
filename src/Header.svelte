<script>
  export let children = 'Space Explorer';

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
    margin-bottom: 36px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  div div {
    display: inline-block;
  }

  img {
    margin-right: 20px;
    border-radius: 50%;
  }

  h2 {
    font-size: 40px;
  }

  h5 {
    color: '#747790';
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
</style>

<div>
  <img src={avatar} alt="Space dog" />
  <div>
    <h2>{children}</h2>
    <h5>{email}</h5>
  </div>
</div>
