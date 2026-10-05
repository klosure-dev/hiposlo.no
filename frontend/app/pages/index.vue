<script setup lang="ts">
import type { StrapiResponse } from 'strapi-sdk-js'
import type { Landing } from '~/types/Landing'

const { data: landing } = await useAsyncData('landing', async () => {
  const response = await useStrapi().find<Landing>('landing', useCmsPreviewParams({
    populate: ['desktopHeroImage', 'mobileHeroImage'],
  })) as unknown as StrapiResponse<Landing>

  return response.data
})

if (!landing.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Landing content is unavailable',
  })
}

const desktopHeroImage = useMediaUrl(landing.value.desktopHeroImage.url)
const mobileHeroImage = useMediaUrl(landing.value.mobileHeroImage.url)
</script>

<template>
  <main>
    <BlockHero
      :desktop-image="desktopHeroImage"
      :mobile-image="mobileHeroImage"
    />
    <PageTitle>{{ landing.title }}</PageTitle>
  </main>
</template>
