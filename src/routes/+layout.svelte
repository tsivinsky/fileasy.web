<script lang="ts">
  import "../app.css";
  import Header from "../components/Header.svelte";
</script>

<svelte:head>
  <title>Fileasy</title>
</svelte:head>

<Header />
<main class="m-2">
  <slot />
</main>
