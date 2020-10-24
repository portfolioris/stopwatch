<script>
  import { activeUserStore } from '../stores';
  import Layout from './atoms/objects/Layout.svelte';
  import Cell from './atoms/objects/Cell.svelte';

  export let users = [];
  export let activeUser;

  const setActiveUser = (userName) => {
    activeUserStore.set(userName);
  };
</script>

<style type="text/scss" lang="scss">
  .button {
    display: block;
    width: 120px;
    height: 120px;
    background-color: black;
    background-image:
            repeating-linear-gradient(135deg, #00000088, #ffffffdd 50%, #00000088),
    repeating-radial-gradient(#ffffffff, #000000ff 2px);
    border-radius: 50%;
    box-shadow:
      0 2px 8px 4px black,
      0 0 80px #00ff0033;
		position: relative;

    &::after {
      content: '';
      position: absolute;
      inset: 10px;
      background-color: transparent;
      border: 2px solid #00ff00ff;
			border-radius: 50%;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      inset: 12px;
      background-color: transparent;
      border-radius: 50%;
			box-shadow:
							1px 1px 2px rgba(255, 255, 255, 1),
							-1px -1px 2px 1px rgba(0, 0, 0, 0.5);
    }
  }
</style>

{#if users}
  <Layout element="ul" gap="base" alignInline="center">
    {#each users as user}
      <Cell element="li" fit>
        <button type="button" on:click={setActiveUser(user.userName)}>
          <span class="button"></span>
          {user.userName} {#if user.userName === activeUser.userName}(current){/if}
        </button>
      </Cell>
    {/each}
  </Layout>
{/if}

<p><a href="#/manage-users">Manage users</a></p>
