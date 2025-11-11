<template>
  <UApp>
    <Body class="text-neutral-300 bg-hip-bg">
      <AppNavbar/>
      <NuxtPage/>
      <AppFooter/>
    </Body>
  </UApp>
</template>

<script lang="ts" setup>
useHead({
  script: [
    { 'defer': true, 'data-domain': "hiposlo.no", 'src': "https://plausible.kakk.dev/js/script.js", },
  ]
})
</script>
