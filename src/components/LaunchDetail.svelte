<script>
  import { getBackgroundImage } from '../helpers/backgrounds';

  export let launch;

  const { date, id, rocket, site } = launch;

  const launchDate = new Date(date);
</script>

<style>
  div {
    padding: calc(var(--unit) * 4) calc(var(--unit) * 5);
    border-radius: 7px;
    color: white;
    background-size: cover;
    background-position: center;
    height: 365px;
    margin-bottom: calc(var(--unit) * 4);
  }
</style>

<div style={getBackgroundImage(id)}>
  <h3>{rocket.name} ({rocket.type})</h3>
  <h5>{site}</h5>
  <h6>{`${launchDate.getFullYear()}`}</h6>
</div>
