<script>
  import Icon from './Icon/Icon.svelte';

  export let href = null;
  export let type = null;
  export let icon = null;
  export let isActive = false;
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  .c-button {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button__shape {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
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

  .c-button[aria-current] {
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

{#if type}
  <button
    type={type}
    class="c-button"
    aria-current={isActive ? 'true' : null}
    on:click
  >
    <span class="button__shape">
      <Icon icon={icon} />
    </span>
    <span class="button__label">
      <slot />
    </span>
  </button>
{/if}

{#if href}
  <a
    href={href}
    class="c-button"
    aria-current={isActive ? 'true' : null}
  >
    <span class="button__shape">
      <Icon icon={icon} />
    </span>
    <span class="button__label">
      <slot />
    </span>
  </a>
{/if}

