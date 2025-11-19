<template>
  <div class="relative border-b border-hip-orange h-[calc(100vh-142px)] lg:h-[calc(100vh-160px)]">
    <NuxtPicture src="/images/hero.jpg" :img-attrs="{ class: 'h-full object-cover' }" width="1920px" sizes="1920px" fit="cover"/>
    <div class="absolute bottom-10 flex justify-center w-full ">
      <AppLogo class="w-[290px]"/>
    </div>
  </div>
</template>
