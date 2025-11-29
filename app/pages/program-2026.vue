<template>
  <AppPadding>
    <PageTitle>Program 2026</PageTitle>
  </AppPadding>
</template>

<script lang="ts" setup>
import type { Program } from '~/types/Program';

const program: Program = {
  performances: [
    {
      title: "DNA? AND?",
    },
    {
      title: "Fort Fort",
      time: "19:00",
      day: 'MANDAG 12.08',
    },
    {
      title: "Le Petite Morte",
      time: "21:00",
      day: 'MANDAG 12.08',
    },
    {
      title: "Live Aids",
      time: "15:00",
      day: 'TIRSDAG 13.08'
    },
    {
      title: "Masselys",
      time: "19:00",
      day: 'TIRSDAG 13.08'
    },
    {
      title: "Organ Donor",
    },
    {
      title: "Polyfrenetics",
    },
    {
      title: "Vepsestikk",
    },
  ]
}
</script>

