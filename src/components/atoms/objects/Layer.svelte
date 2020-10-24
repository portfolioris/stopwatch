<script>
  export let size = 'large';
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  /*  Module
      ========================================================================= */

  .o-layer {
    //
  }

  /*  Sizes
      ========================================================================= */

  .o-layer--tiny {
    padding-block-start: vars.$space-tiny;
    padding-block-end: vars.$space-tiny;
  }

  .o-layer--small {
    padding-block-start: vars.$space-small;
    padding-block-end: vars.$space-small;
  }

  .o-layer--base {
    padding-block-start: vars.$space-base;
    padding-block-end: vars.$space-base;
  }

  .o-layer--large {
    padding-block-start: vars.$space-base;
    padding-block-end: vars.$space-base;
  }

  .o-layer--huge {
    padding-block-start: vars.$space-base*2;
    padding-block-end: vars.$space-base*2;
  }



  /*  Responsive
      ========================================================================= */

  @include responsive.mq(desk) {
    .o-layer--large {
      padding-block-start: vars.$space-base*2;
      padding-block-end: vars.$space-base*2;
    }

    .o-layer--huge {
      padding-block-start: vars.$space-base*4;
      padding-block-end: vars.$space-base*4;
    }
  }
</style>

<div
  class="o-layer"
  class:o-layer--tiny={size === 'tiny'}
  class:o-layer--small={size === 'small'}
  class:o-layer--base={size === 'base'}
  class:o-layer--large={size === 'large'}
  class:o-layer--huge={size === 'huge'}
>
  <slot></slot>
</div>
