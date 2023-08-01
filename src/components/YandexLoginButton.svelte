<script>
  import { PUBLIC_API_URL } from "$env/static/public";
  import YandexLogo from "./YandexLogo.svelte";
</script>

<a
  href={`${PUBLIC_API_URL}/api/auth/yandex`}
  class="flex items-center gap-2 bg-yandex rounded-lg py-2 px-4 text-white outline-offset-1 outline-yandex/60 hover:outline"
>
  <YandexLogo size={24} />
  Login with Yandex
</a>
