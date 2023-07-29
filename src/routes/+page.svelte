<script lang="ts">
  import { PUBLIC_API_URL } from "$env/static/public";

  export let data;
</script>

<h1 class="text-5xl">fileasy</h1>

<h2 class="text-3xl">Your files</h2>
<div>
  {#each data.user.files as file (file.id)}
    <div>
      <a
        href="{PUBLIC_API_URL}/{file.name}"
        class="hover:underline hover:text-blue-500">{file.name}</a
      >
    </div>
  {/each}
</div>
