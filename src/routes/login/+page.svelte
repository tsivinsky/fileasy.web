<script lang="ts">
  import { PUBLIC_API_URL } from "$env/static/public";
</script>

<div>
  <h1 class="text-4xl">Fileasy</h1>
  <a href={`${PUBLIC_API_URL}/api/auth/github`}>Login via GitHub</a>
</div>
