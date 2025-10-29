<template>
  <AppPadding class="py-2.5 border-b border-hip-orange">
    <nav class="flex items-center">
      <NuxtLink to="/">
        <AppLogo class="-ml-1.5 lg:p-0 w-14 lg:w-20"/>
      </NuxtLink>

      <div class="ml-auto flex gap-2 lg:gap-5 items-center text-sm lg:text-2xl">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="text-hip-orange block flex-none last:bg-hip-orange last:text-hip-bg last:px-1.5 last:py-px">
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </AppPadding>
</template>

<script lang="ts" setup>
const links = [
  { label: 'Arkiv', to: '/arkiv'},
  { label: 'Om oss', to: '/om-oss'},
  { label: 'Kontakt', to: '/kontakt'},
  // { label: 'Billetter', to: '/kontakt'},
]
</script>

