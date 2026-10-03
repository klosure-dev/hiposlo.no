<script lang="ts" setup>
interface Contact {
  name?: string
  email?: string
  number?: string
}

const people: Contact[] = [
  {
    email: 'mail@hiposlo.no',
  },
  {
    email: 'faktura@hiposlo.no',
  },
]

useSeoMeta({
  title: 'Hærverk i Parken: Kontakt',
})
</script>

<template>
  <div>
    <PageTitle>Kontakt</PageTitle>

    <AppPadding class="flex flex-col items-center py-8 gap-5">
      <div v-for="person in people" :key="person.email ?? person.name" class="w-full max-w-lg not-last:border-b border-hip-orange not-last:pb-6">
        <p v-if="person.name" class="font-bold">
          {{ person.name }}
        </p>
        <NuxtLink v-if="person.email" :to="`mailto:${person.email}`" class="underline hover:text-hip-blue transition">
          <p>{{ person.email }}</p>
        </NuxtLink>
        <NuxtLink v-if="person.number" :to="`tel:${person.number}`" class="underline hover:text-hip-blue transition">
          <p>{{ person.number }}</p>
        </NuxtLink>
      </div>
    </AppPadding>
  </div>
</template>
