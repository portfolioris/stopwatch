<script>
  import Router from 'svelte-spa-router';
  import AddUser from './routes/AddUser.svelte';
  import ManageUsers from './routes/ManageUsers.svelte';
  import Main from './routes/Main.svelte';

  const routes = {
    '/': Main,
    '/manage-users': ManageUsers,
    '/add-user': AddUser,
  };
</script>


<main>
  <Router {routes} />
</main>
