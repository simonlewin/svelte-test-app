<script>
  import { Link } from 'svero';

  import { MenuItem } from './';
  import { LogoutButton } from '../containers';

  import { CartIcon, HomeIcon, ProfileIcon } from './icons';
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
</style>

<footer>
  <div>
    <MenuItem to="/">
      <HomeIcon />
      Home
    </MenuItem>
    <MenuItem to="/cart">
      <CartIcon />
      Cart
    </MenuItem>
    <MenuItem to="/profile">
      <ProfileIcon />
      Profile
    </MenuItem>
    <MenuItem>
      <LogoutButton />
      Logout
    </MenuItem>
  </div>
</footer>
