<template>
  <div>
    <PageTitle>Kontakt</PageTitle>

    <AppPadding class="flex flex-col items-center py-8 gap-5">
      <div v-for="person in people" :key="person.name" class="w-full max-w-lg not-last:border-b border-hip-orange not-last:pb-6">
        <p class="font-bold"> {{ person.name }}</p>
        <NuxtLink v-if="person.email" :to="`mailto:${person.email}`" class="underline hover:text-hip-blue">
          <p>{{ person.email }}</p>
        </NuxtLink>
        <NuxtLink v-if="person.number" :to="`tel:${person.number}`" class="underline hover:text-hip-blue">
          <p>{{ person.number }}</p>
        </NuxtLink>
      </div>
    </AppPadding>
  </div>
</template>

<script lang="ts" setup>
const people = [
  {
    name: 'Vegard Heskestad',
    email: 'vegard@kafe-haerverk.com',
    number: '+47 9309 5357'
  },
  {
    name: 'Ramy Ghanem',
    email: 'ramy02ghanem@gmail.com',
    number: '+47 9228 2756'
  }
]

useSeoMeta({
  title: "Hærverk i Parken: Kontakt",
})
</script>
