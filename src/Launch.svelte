<script>
  export let launch = {};

  const { id } = launch;
  const { rocket, mission } = launch;

  const backgrounds = ['galaxy', 'iss', 'space'];

  const getBackgroundImage = id =>
    `background-image: url(/assets/images/${
      backgrounds[Number(id) % backgrounds.length]
    }.jpg)`;

  $: image = getBackgroundImage(id);
</script>

<style>
  div {
    padding: 32px 40px;
    border-radius: 7px;
    margin-bottom: 24px;
    background-size: cover;
  }

  h3 {
    color: azure;
    font-size: 36px;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
  }

  h5 {
    color: azure;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
</style>

<div style={image}>
  <h3>{mission.name}</h3>
  <h5>{rocket.name}</h5>
</div>
