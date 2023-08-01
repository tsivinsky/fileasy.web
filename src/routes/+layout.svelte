<script lang="ts">
  import { page } from "$app/stores";
  import "../app.css";
  import Header from "../components/Header.svelte";

  $: pageWithHeader = $page.url.pathname !== "/login";
</script>

<svelte:head>
  <title>Fileasy</title>
</svelte:head>

{#if pageWithHeader}
  <Header />
{/if}
<main>
  <slot />
</main>
