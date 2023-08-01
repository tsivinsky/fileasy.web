<script>
  import { PUBLIC_API_URL } from "$env/static/public";
  import GitHubLogo from "./GitHubLogo.svelte";
</script>

<a
  href={`${PUBLIC_API_URL}/api/auth/github`}
  class="flex items-center gap-2 bg-black rounded-lg py-2 px-4 text-white outline-offset-1 outline-neutral-800/60 hover:outline"
>
  <GitHubLogo size={24} variant="light" />
  <span class="text-lg">Login with GitHub</span>
</a>
