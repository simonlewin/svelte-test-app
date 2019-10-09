<script>
  import { getBackgroundImage } from '../helpers/backgrounds';

  export let launch = {};

  const { id } = launch;
  const { rocket, mission } = launch;
</script>

<style>
  :root {
    --padding: calc(var(--unit) * 2);
  }

  div {
    padding: calc(var(--unit) * 4) calc(var(--unit) * 5);
    border-radius: 7px;
    color: white;
    background-size: cover;
    background-position: center;
    display: block;
    height: 193px;
    margin-top: var(--padding);
    text-decoration: none;
  }

  div:not(:last-child) {
    margin-bottom: calc(var(--padding) * 2);
  }
</style>

<div style={getBackgroundImage(id)}>
  <h3>{mission.name}</h3>
  <h5>{rocket.name}</h5>
</div>
