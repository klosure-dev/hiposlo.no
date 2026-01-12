<template>
  <div>
    <PageTitle>Program 2026</PageTitle>

    <AppPadding class="flex justify-center">
      <div class="space-y-20 my-30 w-full max-w-3xl">
        <div v-for="[day, performances] in Object.entries(byDate)" :key="day">
          <div class="space-y-5">
            <ProgramHeader>
              <p v-if="day !== ''">{{ day }}</p>
              <p v-else>Fredag, Lørdag (12.06, 13.06)</p>
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
      link: 'https://open.spotify.com/artist/2oIIjz25IqVy5YKU7yVhFq/discography/album',
    },
    {
      title: "DNA? AND?",
      link: 'https://open.spotify.com/artist/0x3QK5FfoVylpbguFLdgPW',
    },
    {
      title: "Fort Fort",
      link: 'https://open.spotify.com/track/4SRowSoQjrhvoxaASVQQDM',
    },
    {
      title: "Le Petite Morte",
    },
    {
      title: "Live Aids",
      link: 'https://open.spotify.com/artist/0Z4ihBRT8T2nMcAIOqJ0no'
    },
    {
      title: "Masselys",
      link: 'https://open.spotify.com/artist/6slHNTkNyK4uOPJimcuPNw'
    },
    {
      title: "Organ Donor",
      link: 'https://open.spotify.com/album/4KxKig1BCCyVU335HBXjfV',
    },
    {
      title: "Polyfrenetics",
      link: 'https://open.spotify.com/artist/0CeucPnXYIWj4zhehP4pKz',
    },
    {
      title: "Vepsestikk",
      link: 'https://open.spotify.com/artist/3VnYLHFpI5sSnYQq0blOVP',
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

