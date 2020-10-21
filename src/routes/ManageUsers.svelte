<script>
  import { usersStore } from '../stores';

  let users = [];

  usersStore.subscribe((value) => {
    users = value;
  });
</script>

<h1>Manage users</h1>

<ul>
  {#each users as user}
    <li>
      <a href={`#/manage-users/${user.userName}`}>
        {user.userName}
      </a>
    </li>
  {/each}
</ul>

<p><a href="#/add-user">Add user</a></p>

<p><a href="#/">Back</a></p>

