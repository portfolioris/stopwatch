<script>
  import on from './svg/on.svg';

  export let icon = null;

  const icons = {
    on,
  };
</script>

<style type="text/scss" lang="scss">
	@use '../../../sass/vars';

	:global {
		svg {
			display: block;
			inline-size: vars.$line-height;
			block-size: vars.$line-height;
			fill: currentColor;
		}
	}
</style>

{@html icons[icon]}
