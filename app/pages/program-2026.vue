<template>
  <AppPadding>
    <PageTitle>Program 2026</PageTitle>
  </AppPadding>
</template>

<script lang="ts" setup>
import type { Performance } from '~/types/Performance';
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

function groupByDate(performances: Performance[]): Record<string, Performance[]> {
  return performances.reduce((acc: Record<string, Performance[]>, entry: Performance) => {
    if (acc[''] === undefined) {
      acc[''] = [];
    }

    if (entry.day !== undefined && acc[entry.day] === undefined) {
      acc[entry.day] = []
    }

    if (entry.day === undefined) {
      acc[''].push(entry)
    } else {
      acc[entry.day]?.push(entry)
    }

    return acc
  }, { })
}

const byDate = groupByDate(program.performances)
console.log(byDate)

</script>

