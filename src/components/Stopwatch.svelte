<script>
  import { usersStore } from '../stores';
  // props
  export let activeUser;
  // component vars
  let currentTime = Date.now();
  let startTime = null;
  let endTime = null;
  let interval = null;
  let state = 'ready';
  let users = [];

  usersStore.subscribe((value) => {
    users = value;
  });

  const startTimer = () => {
    interval = setInterval(() => {
      currentTime = Date.now();
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(interval);
  };

  function handleReady() {
    state = 'set';
  }

  function handleStart() {
    startTime = Date.now() + 5000;
    state = 'go';
    startTimer();
  }

  function handleStop() {
    endTime = Date.now();
    state = 'ended';
    stopTimer();
  }

  function handleSave() {
    activeUser.times.push({
      date: endTime,
      time: endTime - startTime,
    });

    const updatedUsers = users.map((user) => (
      user.userName === activeUser.userName ? activeUser : user
    ));

    usersStore.set(updatedUsers);
    state = 'ready';
  }

  function handleDelete() {
    // Are you sure? Modal?

    // reset state
    state = 'ready';
  }
</script>

{#if state === 'ready'}

  <h1>Ready {activeUser.userName}?</h1>
  <button type="button" on:click={handleReady}>Ready</button>

{:else if state === 'set'}

  <button type="button" on:click={handleStart}>Start</button>

{:else if state === 'go'}

  {#if startTime > currentTime}
    <h1>Countdown</h1>
    {startTime - currentTime}
  {:else}
    <h1>Running</h1>
    <p>{ currentTime - startTime }</p>

  {/if}

  <button type="button" on:click={handleStop}>Stop</button>


{:else if state === 'ended'}

  <h1>Elapsed: { endTime - startTime }</h1>

  <button type="button" on:click={handleSave}>Save</button>

  <button type="button" on:click={handleDelete}>Delete</button>

{/if}

