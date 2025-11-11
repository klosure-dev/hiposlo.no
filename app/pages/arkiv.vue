<template>
  <main >
    <PageTitle>2025</PageTitle>
    <div class="flex flex-col items-center">

      <AppPadding class="border-b py-8 border-hip-orange w-full flex flex-col gap-2.5 items-center">
        <BlockYoutubeVideo url="https://www.youtube-nocookie.com/embed/VlhfJJ1ibVw?si=aLhsFcXc3gUVtkSf"/>
        <BlockYoutubeVideo url="https://www.youtube-nocookie.com/embed/ij2EN4NgYEo?si=gwIeX2L-pIIEl8ro"/>
      </AppPadding>

      <AppPadding class="border-b py-8 border-hip-orange w-full flex flex-col gap-2.5 items-center">
        <BlockImageCarousel/>
      </AppPadding>

      <AppPadding class="py-8 w-full flex flex-col gap-2.5 items-center">
        <NuxtPicture src="/images/poster.jpg" class="max-w-[500px]" width="500px" sizes="500px" />
        <p>
          Credit <NuxtLink class="underline" to="https://www.fluhartberg.com/">Flu Hartberg</NuxtLink>, 2024
        </p>
      </AppPadding>
    </div>
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Hærverk i Parken: 2025",
})
</script>


