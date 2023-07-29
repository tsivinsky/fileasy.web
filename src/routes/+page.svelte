<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { PUBLIC_API_URL } from "$env/static/public";
  import type { ApiError } from "../types/errors.js";
  import type { UserFile } from "../types/user.js";
  import { openFile } from "../utils/openFile.js";

  export let data;

  const handleUploadFile = async () => {
    const file = await openFile();
    if (!file) return;

    const formData = new FormData();
    formData.set("file", file);

    const resp = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = (await resp.json()) as UserFile | ApiError;

    if ("error" in data) {
      // TODO: handle error in some way. maybe show to the user
      return;
    }

    await invalidateAll();
  };
</script>

<h1 class="text-5xl mb-4">fileasy</h1>

<button
  class="border border-neutral-400 hover:bg-neutral-200 text-neutral-700 py-1 px-3 rounded-md transition-colors duration-200"
  on:click={handleUploadFile}>Upload file</button
>

<h2 class="text-3xl mt-2">Your files</h2>
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
