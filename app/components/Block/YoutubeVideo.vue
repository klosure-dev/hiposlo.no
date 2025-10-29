<template>
  <div style="display: flex; justify-content: center;" class="max-w-[970px] w-full">
    <iframe style="aspect-ratio: 16 / 9; width: 100% !important;" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  url: string
}
defineProps<Props>()
</script>
