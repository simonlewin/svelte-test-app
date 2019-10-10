<script>
  import { CartIcon, HomeIcon, LogoutIcon, ProfileIcon } from './icons';
</script>

<style>
  footer {
    flex-shrink: 0;
    margin-top: auto;
    background-color: white;
    color: var(--text-secondary);
    position: sticky;
    bottom: 0;
  }

  div {
    display: flex;
    align-items: center;
    max-width: 460px;
    padding: calc(var(--unit) * 2.5);
    margin: 0 auto;
  }

  div.item {
    display: inline-block;
    padding: 0;
    font-size: 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;
  }
</style>

<footer>
  <div>
    <div class="item">
      <HomeIcon />
      Home
    </div>
    <div class="item">
      <CartIcon />
      Cart
    </div>
    <div class="item">
      <ProfileIcon />
      Profile
    </div>
    <div class="item">
      <LogoutIcon />
      Logout
    </div>
  </div>
</footer>
