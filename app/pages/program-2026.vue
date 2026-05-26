<script lang="ts" setup>
import type { Performance } from '~/types/Performance'
import type { Program } from '~/types/Program'

useSeoMeta({
  title: 'Hærverk i Parken: Program 2026',
})

const program: Program = {
  performances: [
    {
      title: 'Dele Sosimi & Blåsenborg Rekreasjonslag',
      link: 'https://delesosimi.bandcamp.com/',
      day: 'Fredag 12.06',
    },
    {
      title: 'Faceshopping',
      link: 'https://open.spotify.com/artist/4pvaKfHuKeG81pOn0y7zqI?si=DsontPg-R5qMBXIwEIZHIg&nd=1&dlsi=a326bece98d04b20',
      day: 'Fredag 12.06',
    },
    {
      title: 'Fort Fort',
      link: 'https://open.spotify.com/track/4SRowSoQjrhvoxaASVQQDM',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Guitar Wolf',
      link: 'https://guitarwolf.bandcamp.com/music',
      day: 'Fredag 12.06',
    },
    {
      title: 'Hard-Ons w/Jerry A',
      link: 'https://hard-ons1.bandcamp.com/',
      day: 'Fredag 12.06',
    },
    {
      title: 'Live Aids',
      link: 'https://open.spotify.com/artist/0Z4ihBRT8T2nMcAIOqJ0no',
      day: 'Fredag 12.06',
    },
    {
      title: 'The Shits',
      link: 'https://theshitsrock.bandcamp.com/',
      day: 'Fredag 12.06',
    },
    {
      title: 'Signe Emmeluth & Karl Bjorå',
      day: 'Fredag 12.06',
    },
    {
      title: 'Alexander Rishaug',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Anal Babes',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Andreas Røysum Ensemble',
      link: 'https://andreasroysumensemble.bandcamp.com/',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Den Elektriske Tannlegestolen',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Brainbombs',
      link: 'https://open.spotify.com/artist/2oIIjz25IqVy5YKU7yVhFq/discography/album',
      day: 'Lørdag 13.06',
    },
    {
      title: 'De Press',
      link: 'https://depress1.bandcamp.com/music',
      day: 'Lørdag 13.06',
    },
    {
      title: 'DNA? AND?',
      link: 'https://open.spotify.com/artist/0x3QK5FfoVylpbguFLdgPW',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Fuzzycat Organ Quartet',
      link: 'https://fuzzycatorganquartet.bandcamp.com/',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Masselys',
      link: 'https://open.spotify.com/artist/6slHNTkNyK4uOPJimcuPNw',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Polyfrenetics',
      link: 'https://open.spotify.com/artist/0CeucPnXYIWj4zhehP4pKz',
      day: 'Fredag 12.06',
    },
    {
      title: 'Vepsestikk',
      link: 'https://open.spotify.com/artist/3VnYLHFpI5sSnYQq0blOVP',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Wrath',
      link: 'https://wrathband.bandcamp.com/album/the-glade-bl-m-ni',
      day: 'Lørdag 13.06',
    },
    {
      title: 'Le Petite Morte',
      day: 'Fredag 12.06',
    },
    {
      title: 'Organ Donor',
      link: 'https://open.spotify.com/album/4KxKig1BCCyVU335HBXjfV',
      day: 'Lørdag 13.06',
    },
  ],
}

function groupByDate(performances: Performance[]): Record<string, Performance[]> {
  return performances.reduce((acc: Record<string, Performance[]>, entry: Performance) => {
    const key = entry.day ?? ''

    if (acc[key] === undefined) {
      acc[key] = []
    }

    acc[key].push(entry)

    return acc
  }, {})
}

const byDate = groupByDate(program.performances)
</script>

<template>
  <div>
    <PageTitle>Program 2026</PageTitle>

    <AppPadding class="flex justify-center my-10">
      <NuxtPicture
        src="/images/poster-2026.JPG"
        :img-attrs="{ class: 'w-full max-w-3xl' }"
      />
    </AppPadding>

    <AppPadding class="flex justify-center">
      <div class="space-y-20 my-30 w-full max-w-3xl">
        <div v-for="[day, performances] in Object.entries(byDate)" :key="day">
          <div class="space-y-5">
            <ProgramHeader>
              <p v-if="day !== ''">
                {{ day }}
              </p>
              <p v-else>
                TBA
              </p>
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
