<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Avatar from "./Avatar.svelte";

  $: isLoggedIn = $page.url.pathname !== "/login";

  const handleLogout = async () => {
    const resp = await fetch("/api/logout");
    const data = await resp.json();

    if (data.ok) {
      goto("/login", { invalidateAll: true });
    }
  };
</script>

<header class="m-2 flex justify-between items-center gap-2">
  <h1 class="text-5xl">fileasy</h1>
  {#if isLoggedIn}
    <div class="flex items-center gap-2">
      {#if $page.data.user.avatar}
        <Avatar avatar={$page.data.user.avatar} size={40} />
      {/if}
      <button
        class="border-2 border-neutral-300 text-neutral-700 rounded-md py-1 px-2 hover:shadow-md"
        on:click={handleLogout}>Logout</button
      >
    </div>
  {/if}
</header>
