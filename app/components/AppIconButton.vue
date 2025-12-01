<template>
  <button class="size-8 bg-hip-orange flex items-center justify-center hover:bg-hip-blue transition cursor-pointer">
    <UIcon :name="icon" class="size-6  text-hip-bg"/>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  icon: string
}
defineProps<Props>()
</script>
