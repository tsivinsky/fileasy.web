<script lang="ts">
  export let avatar: string;
  export let size = 32;
</script>

<img src={avatar} alt="" width={size} height={size} class="rounded-full" />
