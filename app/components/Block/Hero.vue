<template>
  <div class="relative">
    <NuxtPicture src="/images/hero.jpg" :img-attrs="{ class: 'h-[560px] object-cover' }" width="1920px" sizes="1920px" fit="cover"/>
    <div class="absolute bottom-10 flex justify-center w-full">
      <AppLogo class="w-[290px]"/>
    </div>
  </div>
</template>
