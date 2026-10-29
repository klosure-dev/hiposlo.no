<script lang="ts" setup>
useSeoMeta({
  title: 'Hærverk i Parken: Program 2027',
})
</script>

<template>
  <div>
    <PageTitle>Program 2027</PageTitle>

    <AppPadding class="flex gap-10 justify-center my-10 ">
      <div class="flex flex-col gap-7">
        <NuxtPicture
          src="/images/poster-2027.jpg"
          alt="Plakat for Hærverk i Parken 2027, 10.–12. juni i Gamlebyen"
          :img-attrs="{ class: 'w-full max-w-3xl' }"
          width="768"
          sizes="768px"
          format="webp"
          densities="1x"
        />
      </div>
    </AppPadding>
  </div>
</template>
