<script>
  import { usersStore } from '../stores';
</script>

<h1>Manage users</h1>

<ul>
  {#each $usersStore as user}
    <li>
      <a href={`#/manage-users/${user.userName}`}>
        {user.userName}
      </a>
    </li>
  {/each}
</ul>

<p><a href="#/add-user">Add user</a></p>

<p><a href="#/">Back</a></p>

