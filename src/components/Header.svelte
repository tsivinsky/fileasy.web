<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const isLoggedIn = $page.url.pathname !== "/login";

  const handleLogout = async () => {
    const resp = await fetch("/api/logout");
    const data = await resp.json();

    if (data.ok) {
      goto("/", { invalidateAll: true });
    }
  };
</script>

<header class="m-2 flex justify-between items-center gap-2">
  <h1 class="text-5xl">fileasy</h1>
  {#if isLoggedIn}
    <button
      class="border-2 border-neutral-300 text-neutral-700 rounded-md py-1 px-2 hover:shadow-md"
      on:click={handleLogout}>Logout</button
    >
  {/if}
</header>
