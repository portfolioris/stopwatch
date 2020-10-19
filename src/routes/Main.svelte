<script>
  import { activeUserStore } from '../stores';
  import UserPicker from '../components/UserPicker.svelte';

  let activeUser = undefined;

  activeUserStore.subscribe(value => {
    activeUser = value
  });
</script>

<UserPicker activeUser={activeUser} />

{#if activeUser}
  SW
{:else}
  No active user
{/if}
