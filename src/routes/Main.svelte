<script>
  import { usersStore, activeUserStore } from '../stores';
  import UserPicker from '../components/UserPicker.svelte';
  import Stopwatch from '../components/Stopwatch.svelte';
  import Layer from '../components/atoms/objects/Layer.svelte';

  let activeUserName = null;
  let users = [];

  activeUserStore.subscribe((value) => {
    activeUserName = value;
  });

  usersStore.subscribe((value) => {
    users = value;
  });

  const activeUser = users.find((user) => user.userName === activeUserName);
</script>

{#if !users.length}
  <p>No users created. <a href="#/add-user">Create one</a>.</p>
{:else if !activeUser}
  <p>No active user</p>
{:else}
  <Layer size="base">
    <UserPicker users={users} activeUserName={activeUserName} />
  </Layer>
  <Stopwatch activeUser={activeUser} />
{/if}
