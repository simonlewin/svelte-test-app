<script>
  import { getClient, mutate } from 'svelte-apollo';

  import { LoginForm } from '../components';

  import { LOGIN_USER } from '../data/mutations';

  const client = getClient();

  const login = async email => {
    const { data } = await mutate(client, {
      mutation: LOGIN_USER,
      variables: { email },
    });

    localStorage.setItem('token', data.login);
    client.writeData({ data: { isLoggedIn: true } });
  };
</script>

<LoginForm {login} />
