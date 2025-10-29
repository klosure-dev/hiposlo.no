<template>
  <div>
    <iframe class="hidden lg:block" width="970" height="546" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
    <iframe class="block lg:hidden" width="290" height="163" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  url: string
}
defineProps<Props>()
</script>
