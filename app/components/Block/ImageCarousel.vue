<template>
  <AppPadding class="flex flex-col items-center gap-2.5 w-full border-b border-hip-orange py-8">
    <NuxtPicture v-for="picture in pictures" :key="picture" :src="picture.src" class="max-w-[970px]" width="970px" />
  </AppPadding>
</template>

<script lang="ts" setup>
const pictures = [
  { src: '/images/carousel/4V7A4720.jpg' },
  { src: '/images/carousel/4V7A4790.jpg' },
  { src: '/images/carousel/4V7A4813.jpg' },
  { src: '/images/carousel/4V7A4816.jpg' },
  { src: '/images/carousel/HIP061c.jpg' },
  { src: '/images/carousel/HIP073.jpg' },
  { src: '/images/carousel/HIP082.jpg' },
  { src: '/images/carousel/HIP104a.jpg' },
  { src: '/images/carousel/R1-07855-0012.jpg' },
  { src: '/images/carousel/R1-07855-0018.jpg' },
]
</script>

