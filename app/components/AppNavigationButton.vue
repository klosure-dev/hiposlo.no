<script lang="ts" setup>
const { open, toggle } = useNavigationScreen()
const navigationButtonIcon = computed(() => !open.value ? 'humbleicons:bars' : 'humbleicons:times')
</script>

<template>
  <AppIconButton
    :icon="navigationButtonIcon"
    @click="toggle"
  />
</template>
