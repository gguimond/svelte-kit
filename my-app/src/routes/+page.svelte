<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  let mydata = '';

  async function getData() {
    const response = await fetch('/api', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
  
    mydata = await response.text();
  }
</script>

<h1>Welcome to SvelteKit</h1>
<div>{data.myvar}</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about">About my site</a>
<button on:click={getData}>Fetch data</button>
{mydata}

