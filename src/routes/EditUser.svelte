<script>
  import { usersStore } from '../stores';
  import FormField from '../components/FormField.svelte';

  export let params;
  let users = [];
  let error = null;

  usersStore.subscribe((value) => {
    users = value;
  });

  const currentUser = users.find((user) => user.userName === params.userName);

  let { userName } = currentUser;

  function handleSubmit() {
    // username exists
    if (users.some((user) => user.userName === userName)) {
      error = 'This username has been taken.';
      return;
    }

    // username not changed
    if (userName === currentUser.userName) {
      window.location = '#/manage-users';
      return;
    }

    // update username
    currentUser.userName = userName;
    const updatedUsers = users.map((user) => (
      user.userName !== userName ? user : currentUser
    ));

    usersStore.set(updatedUsers);
    window.location = '#/manage-users';
  }

  function handleDelete() {
    const updatedUsers = users.filter((user) => (
      user.userName !== userName
    ));

    usersStore.set(updatedUsers);
    window.location = '#/manage-users';
  }
</script>

<h1>Edit user</h1>

{#if !currentUser}
  <p>Not a valid user.</p>
{:else}
  <form method="post" action="" on:submit|preventDefault={handleSubmit}>

    <FormField
      bind:value={userName}
      error={error}
      name="userName"
      label="Username"
    />

    <button type="submit">Save</button>
  </form>

  <button type="button" on:click={handleDelete}>Delete user</button>
{/if}

