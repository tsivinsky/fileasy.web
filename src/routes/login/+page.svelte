<script lang="ts">
  import { PUBLIC_API_URL } from "$env/static/public";
</script>

<div>
  <h1 class="text-4xl">Fileasy</h1>
  <div class="flex flex-col gap-1 mt-3">
    <a href={`${PUBLIC_API_URL}/api/auth/github`}>Login via GitHub</a>
    <a href={`${PUBLIC_API_URL}/api/auth/yandex`}>Login via Yandex</a>
  </div>
</div>
