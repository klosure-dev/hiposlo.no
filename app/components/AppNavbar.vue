<template>
  <AppPadding class="py-2.5 border-b border-hip-orange">
    <nav class="flex items-center">
      <NuxtLink to="/">
        <AppLogo class="w-20"/>
      </NuxtLink>

      <div class="ml-auto flex gap-5 items-center text-2xl">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="text-hip-orange block flex-none">
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
]
</script>

