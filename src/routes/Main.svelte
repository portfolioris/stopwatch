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
  <Flow space="tiny">
    <h1>The Stopwatch</h1>
    <Layout gap="base" alignInline="center">
      <Cell fit>
        <Button onClick="{createSingleUser}">Single player</Button>
      </Cell>
      <Cell fit>
        <Button>Multiplayer</Button>
      </Cell>
    </Layout>
    <!--    <p>No users created. <a href="#/add-user">Create one</a>.</p>-->
  </Flow>

{:else if !activeUser}
  <p>No active user</p>
{:else}
  <Layer size="base">
    <UserPicker users={$usersStore} activeUserName={$activeUserNameStore} />
  </Layer>
  <Stopwatch activeUser={activeUser} />
{/if}
