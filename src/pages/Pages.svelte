<script>
  import { Router, Route } from 'svero';
  import { Cart, Launch, Launches, Profile } from './';
  import { Bar, Footer } from '../components';
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: calc(var(--unit) * 3);
    padding-bottom: calc(var(--unit) * 5);
  }
</style>

<Bar />

<div>
  <Router>
    <Route exact path="/" component={Launches} />
    <Route exact path="/launch/:launchId" component={Launch} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/profile" component={Profile} />    
  </Router>
</div>

<Footer />
