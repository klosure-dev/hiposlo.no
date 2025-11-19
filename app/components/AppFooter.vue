<template>
  <footer class="border-t border-hip-orange">
    <AppPadding  class="flex flex-col items-center gap-3.5 py-10">
      <NuxtLink to="/" class="group">
        <AppLogo class="text-hip-orange group-hover:text-hip-blue"/>
      </NuxtLink>
      <div class="text-neutral-600 flex flex-col items-center space-y-5">

        <NuxtLink class="block flex-none bg-hip-orange hover:bg-hip-blue transition text-hip-bg px-1.5 py-px text-sm lg:text-2xl plausible-event-name=kjøp-billetter plausible-event-position=footer" :to="appConfig.ticketLink">
          Billetter
        </NuxtLink>

        <div class="space-x-2.5">
          <NuxtLink :to="appConfig.socials.facebook" class="group">
            <UIcon name="cib:facebook" class="text-hip-orange size-8 group-hover:text-hip-blue transition lg:size-10" />
          </NuxtLink>
          <NuxtLink :to="appConfig.socials.instagram" class="group">
            <UIcon name="cib:instagram" class="text-hip-orange size-8 group-hover:text-hip-blue transition lg:size-10"/>
          </NuxtLink>
        </div>

        <p class="leading-0">
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
