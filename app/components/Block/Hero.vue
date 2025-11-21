<template>
  <div class="relative border-b border-hip-orange h-[calc(100vh-142px)] lg:h-[calc(100vh-160px)]">
    <NuxtPicture src="/images/hero-crop.jpg" :img-attrs="{ class: 'h-full object-cover block sm:hidden' }" width="1920px" sizes="1920px" fit="cover"/>
    <NuxtPicture src="/images/hero.jpg" :img-attrs="{ class: 'hidden sm:block h-full object-cover' }" width="1920px" sizes="1920px" fit="cover"/>
    <div class="absolute bottom-0 flex items-center h-full justify-center w-full ">
      <AppLogoShadow class="w-[290px] pt-32"/>
    </div>
  </div>
</template>
