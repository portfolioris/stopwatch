<script>
  import Router from 'svelte-spa-router';
  import AddUser from './routes/AddUser.svelte';
  import ManageUsers from './routes/ManageUsers.svelte';
  import EditUser from './routes/EditUser.svelte';
  import Main from './routes/Main.svelte';

  const routes = {
    '/': Main,
    '/manage-users': ManageUsers,
    '/manage-users/:userName': EditUser,
    '/add-user': AddUser,
  };
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100;500;900&display=swap');

  :global(html) {
	  font-family: 'Big Shoulders Text', cursive;
  }
</style>

<main>
  <Router {routes} />
</main>
