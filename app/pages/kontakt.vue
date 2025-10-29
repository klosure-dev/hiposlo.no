<template>
  <div>
    <PageTitle>Kontakt</PageTitle>

    <div class="flex flex-col items-center py-8 gap-2.5">
      <div v-for="person in people" :key="person.name" class="w-lg">
        <p class="font-bold"> {{ person.name }}</p>
        <p v-if="person.email">{{ person.email }}</p>
        <p v-if="person.number">{{ person.number }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const people = [
  {
    name: 'Vegard Heskestad',
    email: 'vegard@kafe-haerverk.com',
    number: '+47 9309 5357'
  }
]
</script>
