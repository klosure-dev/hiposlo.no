<template>
  <article>
    <div class="flex flex-col sm:flex-row sm:justify-between gap-2.5 px-4 py-8 border border-hip-orange">
      <p class="leading-none text-lg font-semibold">
        {{ performance.title }}
      </p>
      <p v-if="performance.time" class="leading-none text-xs sm:text-sm">
        {{ performance.time }}
      </p>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { Performance } from '~/types/Performance';

interface Props {
  performance: Performance
}

defineProps<Props>()
</script>

