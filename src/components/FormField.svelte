<script>
  export let error = null,
    name = 'name',
    label = 'label',
    value = '';
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
