<template>
  <div>
    <PageTitle>Program 2026</PageTitle>

    <AppPadding class="flex justify-center">
      <div class="space-y-20 my-30 w-full max-w-3xl">
        <div v-for="[day, performances] in Object.entries(byDate)" :key="day">
          <div class="space-y-5">
            <ProgramHeader>
              <p v-if="day !== ''">{{ day }}</p>
              <p v-else> DATO OG TID KOMMER!</p>
            </ProgramHeader>

            <PerformanceCard
              v-for="performance in performances"
              :key="performance.title"
              :performance
            />
          </div>
        </div>
      </div>
    </AppPadding>
  </div>
</template>

<script lang="ts" setup>
import type { Performance } from '~/types/Performance';
import type { Program } from '~/types/Program';

useSeoMeta({
  title: "Hærverk i Parken: Program 2026",
})

const program: Program = {
  performances: [
    {
      title: "Brainbombs",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
    },
    {
      title: "DNA? AND?",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
      link: 'https://open.spotify.com/artist/0x3QK5FfoVylpbguFLdgPW',
    },
    {
      title: "Fort Fort",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
    },
    {
      title: "Le Petite Morte",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
    },
    {
      title: "Live Aids",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
    },
    {
      title: "Masselys",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
      link: 'https://open.spotify.com/artist/6slHNTkNyK4uOPJimcuPNw'
    },
    {
      title: "Organ Donor",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
    },
    {
      title: "Polyfrenetics",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
    },
    {
      title: "Vepsestikk",
      day: 'MANDAG 12.08 - TIRSDAG 13.08',
    },
  ]
}

function groupByDate(performances: Performance[]): Record<string, Performance[]> {
  return performances.reduce((acc: Record<string, Performance[]>, entry: Performance) => {
    if (entry.day === undefined && acc[''] === undefined) {
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
</script>

