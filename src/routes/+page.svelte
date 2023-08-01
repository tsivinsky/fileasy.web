<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { uploadFile } from "../api/uploadFile";
  import TrashIcon from "../components/TrashIcon.svelte";
  import type { ApiError } from "../types/errors.js";
  import { openFile } from "../utils/openFile.js";

  export let data;

  let newFileName = "";

  const handleUploadFile = async () => {
    const file = await openFile();
    if (!file) return;

    const result = await uploadFile(
      { file, name: newFileName },
      data.accessToken
    );

    if ("error" in result) {
      // TODO: handle error in some way. maybe show to the user
      return;
    }

    newFileName = "";

    await invalidateAll();
  };

  const handleDeleteFile = async (fileId: number) => {
    const resp = await fetch("/api/delete", {
      method: "POST",
      body: JSON.stringify({ fileId }),
    });
    const data = (await resp.json()) as { ok: boolean } | ApiError;

    if ("error" in data) {
      // TODO: handle error in some way. maybe show to the user
      return;
    }

    await invalidateAll();
  };
</script>

<div class="m-2">
  <form
    on:submit|preventDefault={handleUploadFile}
    class="flex flex-col items-start gap-2 mt-10"
  >
    <input
      bind:value={newFileName}
      class="border border-neutral-400 py-1 px-2 rounded-md outline-offset-1"
      placeholder="File name"
    />
    <button
      type="submit"
      class="border border-neutral-400 hover:bg-neutral-200 text-neutral-700 py-1 px-3 rounded-md transition-colors duration-200"
      >Upload file</button
    >
  </form>

  <h2 class="text-3xl mt-2">Your files</h2>
  <div>
    {#each data.user.files as file (file.id)}
      <div class="group flex items-center gap-2">
        <a href="/{file.name}" class="hover:underline hover:text-blue-500"
          >{file.name}</a
        >
        <button
          class="hidden group-hover:block"
          on:click={() => handleDeleteFile(file.id)}
        >
          <TrashIcon size={18} color="#b00420" />
        </button>
      </div>
    {/each}
  </div>
</div>
