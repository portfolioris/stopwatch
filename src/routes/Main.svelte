<script>
  import { usersStore, activeUserNameStore } from '../stores';
  import UserPicker from '../components/UserPicker.svelte';
  import Stopwatch from '../components/Stopwatch.svelte';
  import Layer from '../components/atoms/objects/Layer.svelte';
  import Layout from '../components/atoms/objects/Layout.svelte';
  import Button from '../components/atoms/Button.svelte';
  import Cell from '../components/atoms/objects/Cell.svelte';
  import Flow from '../components/atoms/objects/Flow.svelte';

  // `activeUser` is an object, so this is reactive to `activeUserNameStore`
  $: activeUser = $usersStore.find((user) => user.userName === $activeUserNameStore);

  function createSingleUser() {
    usersStore.update((u) => {
      u.push({
        userName: 'Player One',
        times: [],
      });
      return u;
    });

    activeUserNameStore.set('Player One');
  }
</script>

{#if !$usersStore.length}
  <Flow>
    <h1>The Stopwatch</h1>
    <Layout gap="huge" alignInline="center">
      <Cell fit>
        <Button type="button" on:click={createSingleUser} icon="on">Single player</Button>
      </Cell>
      <Cell fit>
        <Button type="button" icon="on">Multiplayer</Button>
      </Cell>
    </Layout>
  </Flow>

{:else if !activeUser}
  <p>No active user</p>
{:else}

  <div class="grid">
    <header>
      <Layer size="base">
        <UserPicker users={$usersStore} activeUserName={$activeUserNameStore} />
      </Layer>
    </header>

    <main>
      <Stopwatch activeUser={activeUser} />
    </main>

    <footer>
      <p><a href="#/manage-users">Manage users</a></p>
    </footer>
  </div>
{/if}

<style type="text/scss" lang="scss">
  .grid {
    display: grid;
    height: 100%;
    grid-template-rows: 1fr auto 1fr;
    justify-items: center;
  }

  footer {
    align-self: end;
  }
</style>
