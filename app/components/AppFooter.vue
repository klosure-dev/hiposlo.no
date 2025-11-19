<template>
  <footer class="border-t border-hip-orange">
    <AppPadding  class="flex flex-col items-center gap-3.5 py-10">
      <NuxtLink to="/">
        <AppLogo/>
      </NuxtLink>
      <div class="text-neutral-600 flex flex-col items-center space-y-3">

        <NuxtLink class="block flex-none bg-hip-orange hover:bg-hip-blue transition text-hip-bg px-1.5 py-px text-sm lg:text-2xl plausible-event-name=kjøp-billetter plausible-event-position=footer" :to="appConfig.ticketLink">
          Billetter
        </NuxtLink>

        <p>
          Copyright @ Hærverk i Parken {{ new Date().getFullYear() }}
        </p>

        <div class="flex gap-1">
          <p>Av </p>
          <NuxtLink to="https://alfarnes.dev" class="underline hover:text-hip-blue transition">Kasper Alfarnes</NuxtLink>
          <p>og</p>
          <NuxtLink to="https://stener-vaagland.com" class="underline hover:text-hip-blue transition">Stener Vaagland </NuxtLink>
        </div>
      </div>
    </AppPadding>
  </footer>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()
</script>
