<template>
  <div class="overflow-hidden w-full lg:px-12 py-8">
    <UCarousel v-slot="{ item }" :items="pictures" :ui="{ item: 'lg:basis-2/3' }" arrows>
      <div class="w-full mx-auto">
        <NuxtPicture  :src="item.src" class="max-w-[970px] w-full" width="970px" sizes="970px" />
        <p class="text-gray-600 py-2.5">{{ item.credit }}</p>
      </div>
    </UCarousel>
  </div>
</template>

<script lang="ts" setup>
const pictures = [
  {
    src: '/images/carousel/nabeeh-samaan-1.JPG',
    credit: 'Nabeeh Samaan'
  },
  {
    src: '/images/carousel/nabeeh-samaan-3.JPG',
    credit: 'Nabeeh Samaan'
  },
  {
    src: '/images/carousel/nabeeh-samaan-4.JPG',
    credit: 'Nabeeh Samaan'
  },
  {
    src: '/images/carousel/nabeeh-samaan-5.JPG',
    credit: 'Nabeeh Samaan'
  },
  {
    src: '/images/carousel/HIP082.jpg',
    credit: 'Morten Andersen'
  },
  {
    src: '/images/carousel/HIP104a.jpg',
    credit: 'Morten Andersen'
  },
  {
    src: '/images/carousel/morten-andersen-1.jpg',
    credit: 'Morten Andersen'
  },
  {
    src: '/images/carousel/morten-andersen-2.jpg',
    credit: 'Morten Andersen'
  },
  {
    src: '/images/carousel/morten-andersen-3.jpg',
    credit: 'Morten Andersen'
  },
  {
    src: '/images/carousel/morten-andersen-4.jpg',
    credit: 'Morten Andersen'
  },
  {
    src: '/images/carousel/R1-07855-0012.jpg',
    credit: 'Lea Fagernes'
  },
  {
    src: '/images/carousel/R1-07855-0018.jpg',
    credit: 'Lea Fagernes'
  },
  {
    src: '/images/carousel/R1-07855-0021.jpg',
    credit: 'Lea Fagernes'
  },
]
</script>

