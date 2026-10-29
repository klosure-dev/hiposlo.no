<script lang="ts" setup>
import type { Performance } from '~/types/Performance'
import type { Program } from '~/types/Program'

useSeoMeta({
  title: 'Hærverk i Parken: Program 2027',
})

const program: Program = {
  performances: [
    {
      title: 'Brainbombs',
      link: 'https://open.spotify.com/artist/2oIIjz25IqVy5YKU7yVhFq',
    },
    {
      title: 'DNA? AND?',
      link: 'https://open.spotify.com/artist/0x3QK5FfoVylpbguFLdgPW',
    },
    {
      title: 'Sweden',
    },
    {
      title: 'Odd Jr',
      link: 'https://oddjr.bandcamp.com/',
    },
    {
      title: 'France',
    },
    {
      title: 'Hayeminol',
      link: 'https://hayeminol.bandcamp.com/',
    },
    {
      title: 'Urin 3000',
      link: 'https://urin3000.bandcamp.com/',
    },
    {
      title: 'Den elektriske tannlegestolen',
      link: 'https://ibsenminothi.no/den-elektriske-tannlegestolen',
    },
    {
      title: 'Action & Tension & Space',
      link: 'https://actiontensionspace.bandcamp.com/',
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
    <PageTitle>Program 2027</PageTitle>

    <AppPadding class="flex gap-10 justify-center my-10 ">
      <div class="flex flex-col gap-7">
        <NuxtPicture
          src="/images/poster-2027.jpg"
          alt="Plakat for Hærverk i Parken 2027, 10.–12. juni i Gamlebyen"
          :img-attrs="{ class: 'w-full max-w-3xl' }"
          width="768"
          sizes="768px"
          format="webp"
          densities="1x"
        />
      </div>
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
