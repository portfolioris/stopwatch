<script>
  import { usersStore, activeUserNameStore } from '../stores';
  import FormField from '../components/molecules/FormField.svelte';

  let userName = '';
  let error = null;
  let formCompleted = false;

  function handleSubmit() {
    if ($usersStore.some((user) => user.userName === userName)) {
      error = 'This username has been taken.';
      return;
    }

    usersStore.update((u) => {
      u.push({
        userName,
        times: [],
      });
      return u;
    });

    activeUserNameStore.set(userName);

    // reset form
    userName = '';
    formCompleted = true;
  }
</script>

<h1>Add new user</h1>

{#if !formCompleted}
  <form method="post" action="" on:submit|preventDefault={handleSubmit}>

    <FormField
      bind:value={userName}
      error={error}
      name="userName"
      label="Username"
    />

    <button type="submit">Save</button>
  </form>

{:else}
  <p>User added!</p>
  <p><button type="button" on:click={() => { formCompleted = false; }}>Add another user</button></p>
{/if}

<p><a href="#/manage-users">Back</a></p>

