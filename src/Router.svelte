<script>
  import Router from 'svelte-spa-router';
  import AddUser from './routes/AddUser.svelte';
  import ManageUsers from './routes/ManageUsers.svelte';
  import EditUser from './routes/EditUser.svelte';
  import Main from './routes/Main.svelte';
  import Template from './components/Template.svelte';

  const routes = {
    '/': Main,
    '/manage-users': ManageUsers,
    '/manage-users/:userName': EditUser,
    '/add-user': AddUser,
  };
</script>

<Template>
  <Router {routes} />
</Template>
