<template>
  <AppPadding class="py-2.5 border-b border-hip-orange">
    <nav class="flex items-center">
      <NuxtLink to="/">
        <AppLogo class="w-20"/>
      </NuxtLink>

      <div class="ml-auto space-x-5">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="text-hip-orange">
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

