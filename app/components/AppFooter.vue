<template>
  <footer class="border-t border-hip-orange">
    <AppPadding  class="flex flex-col items-center gap-3.5 py-10">
      <NuxtLink to="/">
        <AppLogo/>
      </NuxtLink>
      <div class="text-neutral-600 text-center">
        <p>Nettside av:</p>
        <NuxtLink to="https://alfarnes.dev">
          <p>Kasper Alfarnes</p>
        </NuxtLink>
        <NuxtLink to="https://stener-vaagland.com">
          <p>Stener Vaagland</p>
        </NuxtLink>

        <p>
          Copyright @ Hærverk i Parken {{ new Date().getFullYear() }}
        </p>

      </div>
    </AppPadding>
  </footer>
</template>
