<template>
  <div>
    <PageTitle>Program 2026</PageTitle>

    <AppPadding class="flex justify-center">
      <div class="space-y-20 my-30 w-full max-w-3xl">
        <div v-for="[day, performances] in Object.entries(byDate)" :key="day">
          <div class="space-y-5">
            <ProgramHeader>
              <p v-if="day !== ''">{{ day }}</p>
              <p v-else>Fredag, Lørdag (12.08, 13.08)</p>
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
    },
    {
      title: "DNA? AND?",
      link: 'https://open.spotify.com/artist/0x3QK5FfoVylpbguFLdgPW',
    },
    {
      title: "Fort Fort",
    },
    {
      title: "Le Petite Morte",
    },
    {
      title: "Live Aids",
    },
    {
      title: "Masselys",
      link: 'https://open.spotify.com/artist/6slHNTkNyK4uOPJimcuPNw'
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

