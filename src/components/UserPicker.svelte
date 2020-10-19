<script>
  import { usersStore, activeUserStore } from '../stores';

  let users = [];
  export let activeUser;

  usersStore.subscribe(value => {
    users = value;
  });

  const setActiveUser = function (userName) {
    activeUserStore.set(userName);
  }
</script>

{#if users}
  <ul>
    {#each users as user}
      <li>
        <button type="button" on:click={setActiveUser(user.userName)}>
          {user.userName} {#if user.userName === activeUser}(current){/if}
        </button>
      </li>
    {/each}
  </ul>
{/if}

<p><a href="#/manage-users">Manage users</a></p>
