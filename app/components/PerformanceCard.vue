<template>
  <article>
    <div class="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5 px-4 py-8 border border-hip-orange">
      <p class="leading-none text-lg font-semibold sm:mr-auto">
        {{ performance.title }}
      </p>
      <p v-if="performance.time" class="leading-none text-xs sm:text-sm">
        {{ performance.time }}
      </p>

      <NuxtLink v-if="performance.link" :to="performance.link">
        <button class="border px-4 h-9 font-bold border-hip-orange bg-hip-bg text-hip-orange hover:border-hip-blue transition hover:text-hip-blue">
          Se mer
        </button>
      </NuxtLink>
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

