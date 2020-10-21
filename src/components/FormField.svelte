<script>
  export let error = null;
  export let name = 'name';
  export let label = 'label';
  export let value = '';
</script>

<label for={name}>{label}</label>
<input
  id={name}
  bind:value={value}
  aria-describedby={error ? `${name}-error` : null}
  required
>

{#if error}
  <div id={`${name}-error`}>{error}</div>
{/if}
