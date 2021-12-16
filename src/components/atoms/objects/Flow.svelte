<script>
  export let space = null;
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/objects/flow' with (
    $gaps: ('base', 'tiny'),
  );
</style>

<div
  class="o-flow"
  class:o-flow--tiny={space === 'tiny'}
>
  <slot />
</div>
