<script>
  import { activeUserNameStore } from '../stores';
  import Layout from './atoms/objects/Layout.svelte';
  import Cell from './atoms/objects/Cell.svelte';
  import Icon from './atoms/Icon/Icon.svelte';

  export let users = [];
  export let activeUserName = null;

  const setActiveUser = (userName) => {
    activeUserNameStore.set(userName);
  };
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  button {
    color: #ffffff;
  }

  .button__shape {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background-image:
      repeating-linear-gradient(135deg, #00000088, #ffffffdd 50%, #00000088),
      repeating-radial-gradient(#ffffffff, #000000ff 2px);
    border-radius: 50%;
    box-shadow: 0 2px 8px 4px #00000088;
    position: relative;
    margin-block-end: vars.$space-tiny;

    &::after {
      content: '';
      position: absolute;
      inset: 10px;
      background-color: transparent;
      border: 2px solid #00ff0011;
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
        1px 1px 2px #ffffffff,
        -1px -1px 2px 1px #00000088;
    }

    :global {
      svg {
        filter: drop-shadow(-1px -1px 1px #00000088);
        color: #00000044;
      }
    }
  }

  .button__label {
    @include typography.font-size(24px);
    text-shadow:
      0 -1px 1px #ffffff88,
      1px 1px 1px #000000ff;
  }

  button[aria-current] {
    .button__shape {
      box-shadow:
        0 2px 8px 4px #00000088,
        0 0 80px #00ff0033;

      &::after {
        border-color: #00ff00ff;
      }

      :global {
        svg {
          filter: drop-shadow(-1px -1px 1px #00000088) drop-shadow(0 0 10px #00ff00ff);
          color: #00ff0066;
        }
      }
    }
  }

</style>

{#if users}
  <Layout element="ul" gap="base" alignInline="center">
    {#each users as user}
      <Cell element="li" fit>
        <button type="button" on:click={setActiveUser(user.userName)}
                aria-current={activeUserName === user.userName ? 'true' : null}>
          <span class="button__shape">
            <Icon icon="on" />
          </span>
          <span class="button__label">
          {user.userName}
          </span>
        </button>
      </Cell>
    {/each}
  </Layout>
{/if}

<p><a href="#/manage-users">Manage users</a></p>
