<script>
  export let launch = {};

  const { id } = launch;
  const { rocket, mission } = launch;

  const backgrounds = ['galaxy', 'iss', 'space', 'moon'];

  $: background = `background-image: url(/assets/images/${
    backgrounds[Number(id) % backgrounds.length]
  }.jpg)`;
</script>

<style>
  div {
    padding: 32px 40px;
    border-radius: 7px;
    margin-bottom: 24px;
    background-size: cover;
    font-family: 'Source Sans Pro', sans-serif;
  }

  h3 {
    color: azure;
    font-size: 36px;
    font-weight: 600;
  }

  h5 {
    color: azure;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
</style>

<div style={background}>
  <h3>{mission.name}</h3>
  <h5>{rocket.name}</h5>
</div>
