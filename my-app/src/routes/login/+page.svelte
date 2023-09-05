<script lang="ts">
  import type { PageData, ActionData } from './$types';
  import { enhance } from '$app/forms';
  import { getContext } from 'svelte';

  export let data: PageData;
  
  export let form: ActionData;

  function showTip(event) {
    alert('about to submit');
  }
  const user = getContext('user');
</script>
{#if form?.missing}<p class="error">The fields are required</p>{/if}
{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
  <p>Successfully logged in! Welcome back, {data.name}</p>
{:else}
<form method="POST" action="?/login" use:enhance>
  <label>
    Email
    <input name="email" type="email" value={form?.email ?? ''}>
  </label>
  <label>
    Password
    <input name="password" type="password">
  </label>
  <button on:click={showTip}>Log in</button>
</form>
{/if}
User active : {$user.isActive}
