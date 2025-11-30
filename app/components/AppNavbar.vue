<template>
  <AppPadding class="py-2.5 border-b border-hip-orange sticky top-0 bg-hip-bg z-10">
    <nav class="flex items-center">
      <NuxtLink to="/" class="group">
        <AppLogo class="-ml-1.5 lg:p-0 w-14 lg:w-20 text-hip-orange group-hover:text-hip-blue transition"/>
      </NuxtLink>

      <div class="ml-auto flex gap-2 lg:gap-5 items-center text-sm lg:text-2xl">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :class="link.class" class="text-hip-orange block flex-none last:bg-hip-orange hover:text-hip-blue last:hover:text-hip-bg last:text-hip-bg last:hover:bg-hip-blue transition last:px-1.5 last:py-px">
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </AppPadding>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

const links = [
  { label: 'Arkiv', to: '/arkiv', class: '' },
  { label: 'Om oss', to: '/om-oss', class: '' },
  { label: 'Kontakt', to: '/kontakt', class: '' },
  { label: 'Billetter', to: appConfig.ticketLink, class: 'plausible-event-name=kjøp-billetter plausible-event-position=navbar' },
]
</script>

