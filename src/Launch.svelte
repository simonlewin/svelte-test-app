<script>
  export let launch = {};

  const { id = null } = launch;
  const { mission: { name = '' } = {} } = launch;
</script>

<li>{id}. {name}</li>
