<script lang="ts">
  import GitHubLoginButton from "../../components/GitHubLoginButton.svelte";
  import YandexLoginButton from "../../components/YandexLoginButton.svelte";
</script>

<div class="h-screen grid grid-rows-3 justify-center">
  <div class="flex items-center justify-center">
    <h1 class="text-5xl font-bold text-center">Fileasy</h1>
  </div>
  <div class="flex flex-col gap-2 items-center justify-center">
    <GitHubLoginButton />
    <YandexLoginButton />
  </div>
</div>
