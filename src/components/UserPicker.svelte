<script>
  import { activeUserStore } from '../stores';

  export let users = [];
  export let activeUser;

  const setActiveUser = (userName) => {
    activeUserStore.set(userName);
  };
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
