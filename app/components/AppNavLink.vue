<script lang="ts" setup>
import type { NavLink } from '~/types/NavLink'

interface Props {
  link: NavLink
}
defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="link.to"
    :class="link.class"
    class="text-hip-orange block flex-none last:bg-hip-orange hover:text-hip-blue last:hover:text-hip-bg last:text-hip-bg last:hover:bg-hip-blue transition last:px-1.5 last:py-px"
  >
    {{ link.label }}
  </NuxtLink>
</template>
