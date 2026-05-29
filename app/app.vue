<script lang="ts" setup>
useHead({
  script: [
    // { 'async': true, 'data-domain': "hiposlo.no", 'src': "https://plausible.kakk.dev/js/script.tagged-events.js", },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})

useSeoMeta({
  title: 'Hærverk i Parken',
  description: 'En ny og fremtidstrettet festival med fokus på ung norsk musikk.',
})

const appConfig = useAppConfig()

const links = [
  { label: 'Arkiv', to: '/arkiv', class: '' },
  { label: 'Om oss', to: '/om-oss', class: '' },
  { label: 'Kontakt', to: '/kontakt', class: '' },
  { label: 'Praktisk info', to: '/praktisk-info', class: '' },
  { label: 'Program 2026', to: '/program-2026', class: '' },
  { label: 'Billetter', to: appConfig.ticketLink, class: 'plausible-event-name=kjøp-billetter plausible-event-position=navbar' },
]
</script>

<template>
  <UApp>
    <Body class="text-neutral-300 bg-hip-bg">
      <AppNavbar :links />
      <AppNavigationScreen :links />
      <NuxtPage />
      <AppFooter />
    </Body>
  </UApp>
</template>
