<script setup lang="ts">
const { enabled, state } = useCmsPreviewMode()

const statusLabel = computed(() => state.status === 'draft' ? 'utkast' : 'publisert')
</script>

<template>
  <div v-if="enabled" class="bg-hip-orange py-2 text-center text-sm font-bold text-white">
    Forhåndsvisning: {{ statusLabel }}
  </div>
</template>
