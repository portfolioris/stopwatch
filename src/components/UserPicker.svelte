<script>
  import { activeUserNameStore } from '../stores';
  import Layout from './atoms/objects/Layout.svelte';
  import Cell from './atoms/objects/Cell.svelte';
  import Button from './atoms/Button.svelte';

  export let users = [];
  export let activeUserName = null;

  const setActiveUser = (userName) => {
    activeUserNameStore.set(userName);
  };
</script>

{#if users}
  <Layout element="ul" gap="base">
    {#each users as user}
      <Cell element="li" fit>
        <Button
          type="button"
          icon="on"
          on:click={setActiveUser(user.userName)}
          isActive={activeUserName === user.userName}
        >
          {user.userName}
        </Button>
      </Cell>
    {/each}
  </Layout>
{/if}
