<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { LayoutData } from './$types';
   
  // Create a store and update it when necessary...
  const user = writable();
  $: user.set({ isActive : true });
  
  // ...and add it to the context for child components to access
  setContext('user', user);
</script>

<slot></slot>