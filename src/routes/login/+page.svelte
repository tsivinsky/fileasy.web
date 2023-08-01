<script lang="ts">
  import GitHubLoginButton from "../../components/GitHubLoginButton.svelte";
  import YandexLoginButton from "../../components/YandexLoginButton.svelte";
</script>

<div class="h-screen flex flex-col justify-center items-center">
  <h1 class="text-5xl font-bold mb-10">Login</h1>
  <div class="flex flex-col gap-2">
    <GitHubLoginButton />
    <YandexLoginButton />
  </div>
</div>
