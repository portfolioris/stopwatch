<script>
  import { usersStore, activeUserStore } from '../stores';
  import UserPicker from '../components/UserPicker.svelte';

  let activeUser = null;
  let users = [];

  activeUserStore.subscribe((value) => {
    activeUser = value;
  });

  usersStore.subscribe((value) => {
    users = value;
  });
</script>

{#if !users.length}
  <p>No users created. <a href="#/add-user">Create one</a>.</p>
{:else if activeUser}
  <UserPicker users={users} activeUser={activeUser} />
  <p>SW</p>
{:else}
  No active user
{/if}
