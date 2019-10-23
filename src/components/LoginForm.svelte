<script>
  import { Button } from './';
  import { Curve, Logo, Rocket } from './assets/';

  export let login;

  let email = '';

  const onSubmit = () => login(email);
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding-bottom: calc(var(--unit) * 6);
    color: white;
    background-color: var(--primary);
    background-image: url('/assets/images/space.jpg');
    background-size: cover;
    background-position: center;
  }

  header {
    display: block;
    fill: currentColor;
    width: 100%;
    margin-bottom: calc(var(--unit) * 5);
    padding: calc(var(--unit) * 2.5);
    position: relative;
  }

  h1 {
    margin: calc(var(--unit) * 3) 0 calc(var(--unit) * 6);
  }

  form {
    width: 100%;
    max-width: 406px;
    padding: calc(var(--unit) * 3.5);
    border-radius: 3px;
    box-shadow: 6px 6px 1px rgba(0, 0, 0, 0.25);
    color: var(--text);
    background-color: white;
  }

  input {
    width: 100%;
    margin-bottom: calc(var(--unit) * 2);
    padding: calc(var(--unit) * 1.25) calc(var(--unit) * 2.5);
    border: 1px solid var(--grey);
    font-size: 16px;
    outline: none;
  }

  input:focus {
    border-color: var(--primary);
  }
</style>

<div>
  <header>
    <Curve />
    <Logo />
  </header>
  <Rocket />
  <h1>Space Explorer</h1>
  <form on:submit|preventDefault={onSubmit}>
    <input
      required
      type="email"
      name="email"
      placeholder="Email"
      bind:value={email} />
    <Button>Log in</Button>
  </form>
</div>
