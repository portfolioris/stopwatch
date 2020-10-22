<script>
  import { usersStore, activeUserStore } from '../stores';
  import UserPicker from '../components/UserPicker.svelte';
  import Stopwatch from '../components/Stopwatch.svelte';

  let activeUsername = null;
  let users = [];

  activeUserStore.subscribe((value) => {
    activeUsername = value;
  });

  usersStore.subscribe((value) => {
    users = value;
  });

  const activeUser = users.find((user) => user.userName === activeUsername);
</script>

{#if !users.length}
  <p>No users created. <a href="#/add-user">Create one</a>.</p>
{:else if !activeUser}
  <p>No active user</p>
{:else}
  <UserPicker users={users} activeUser={activeUser} />
  <Stopwatch activeUser={activeUser} />
{/if}
