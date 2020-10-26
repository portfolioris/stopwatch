<script>
  import './svg/on.svg';

  export let icon = null;

  /*
  const icons = {
    on,
  };
  */
</script>

<style type="text/scss" lang="scss">
  @use '../../../sass/vars';

  :global {
    .c-icon {
      display: block;
      inline-size: vars.$line-height;
      block-size: vars.$line-height;
      fill: currentColor;
    }
  }
</style>

<svg
  class="c-icon"
  aria-hidden="true"
>
  <use xlink:href={`/build/sprites.svg#${icon}`} />
</svg>

