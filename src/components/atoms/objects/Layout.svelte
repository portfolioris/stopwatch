<script>
  export let element = 'div';
  export let alignInline = null;
  export let gap = null;
  export let hasEqualheight = false;
</script>

<style lang="scss" type="text/scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/objects/layout' with (
    $gaps: ('base', 'huge')
  );
</style>

{#if element === 'div'}
  <div
    class="o-layout"
    class:o-layout--align-inline-center={alignInline === 'center'}
    class:o-layout--gap-small={gap === 'small'}
    class:o-layout--gap-base={gap === 'base'}
    class:o-layout--gap-huge={gap === 'huge'}
    class:o-layout--equalheight={hasEqualheight}
  >
    <slot />
  </div>
{:else if element === 'ul'}
  <ul
    class="o-layout"
    class:o-layout--align-inline-center={alignInline === 'center'}
    class:o-layout--gap-small={gap === 'small'}
    class:o-layout--gap-base={gap === 'base'}
    class:o-layout--gap-huge={gap === 'huge'}
    class:o-layout--equalheight={hasEqualheight}
  >
    <slot />
  </ul>
{/if}
