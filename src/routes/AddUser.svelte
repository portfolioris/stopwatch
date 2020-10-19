<script>
  import { usersStore, activeUserStore } from '../stores';

  let userName = '',
    error = null,
    users = [],
    formCompleted = false;

  usersStore.subscribe(value => {
    users = value;
  });

  function handleSubmit() {
    if (users.some((user) => user.userName === userName)) {
      error = 'This username has been taken.';
      return;
    }

    usersStore.update((u) => {
      u.push({ userName });
      return u;
    });

    activeUserStore.set(userName);

    userName = '';
    formCompleted = true;
  }
</script>

<h1>Add new user</h1>

{#if !formCompleted}
  <form method="post" action="" on:submit|preventDefault={handleSubmit}>

    <label for="userName">Name</label>
    <input
      id="userName"
      bind:value={userName}
      aria-describedby={error ? 'userName-error' : null}
      required
      autocomplete="given-name"
    >

    {#if error}
      <div id="userName-error">{error}</div>
    {/if}

    <button type="submit">Save</button>
  </form>

  <p><a href="#/">Back</a></p>
{:else}
  <p>User added!</p>
  <p><a href="#/">Start</a></p>
  <p><button type="button" on:click={() => formCompleted = false}>Add another user</button></p>
{/if}
