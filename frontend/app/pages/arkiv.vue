<script lang="ts" setup>
const posters = [
  '/images/poster-color.jpg',
  '/images/poster-bw.jpg',
]

const artister = [
  { label: 'Ronny Ver', link: 'https://open.spotify.com/artist/6fxH2Rxcx7QSv3YzCqxW1h?si=Ff5pCRe4RH27GK3kI3qUgg' },
  { label: 'Masselys', link: 'https://open.spotify.com/artist/6slHNTkNyK4uOPJimcuPNw' },
  { label: 'Gerilja', link: 'https://open.spotify.com/artist/1OPBKPgqguelzVZtQ0Hj4Y' },
  { label: 'Blindtärm', link: 'https://open.spotify.com/artist/5rFjZLsvuGb88z92nIZLl6?si=pDFr7Il-Qo-so0DsMEjLug' },
  { label: 'Deathhammer', link: 'https://open.spotify.com/artist/5mVI4OOATqklEKc0ZOFomS' },
  { label: 'Hayeminol', link: 'https://open.spotify.com/artist/1xljZ0p7YdqrqJL6qFfjR6?si=C7U24PljTXyGMgNGVcltcg' },
  { label: 'DNA? AND?', link: 'https://open.spotify.com/artist/0x3QK5FfoVylpbguFLdgPW' },
  { label: 'Pumpegris', link: 'https://open.spotify.com/artist/6ffouJYBfWqrHFC05DK9MZ?si=Ksx7x4I8TE-Pm0xz5OIXvg' },
  { label: 'Drakånis', link: 'https://open.spotify.com/artist/4njbiof5XsDXCbUrpRVywk' },
  { label: 'Hans Kvist', link: 'https://open.spotify.com/artist/5JSkyF4VqH5L24P6BWEYw2' },
]

useSeoMeta({
  title: 'Hærverk i Parken: 2025',
})
</script>

<template>
  <main>
    <PageTitle>2025</PageTitle>
    <div class="flex flex-col items-center">
      <AppPadding class="border-b py-8 border-hip-orange w-full flex flex-col gap-2.5 items-center">
        <BlockYoutubeVideo url="https://www.youtube-nocookie.com/embed/3TTXTQk6N5U?si=JLuWLR_7MGHFNkhL" />

        <div class="max-w-[970px] space-y-4 py-8">
          <p>Velkommen til Hærverk I Parken, en musikkfestival for alle. Velkommen til Skateparken i Gamlebyen lørdag 14. juni 2025.</p>
          <p>Du får 11 unike band som spriker i alle sjangerretninger, hvorav 7 har medlemmer fra 15-25 år, til en pris du faktisk har råd til. Velkommen til en festival der unge folk er med i alle ledd av produksjonen. Velkommen til en festival uten dyre headlinere som avlyser i siste minutt. Velkommen til en festival fri for spradebasser og influencere som ikke er interessert i musikk.</p>
          <p> Velkommen til en festival med god mat og drikke du har råd til. Velkommen til folkefest i Gamlebyen. Velkommen til en festival for fremtiden.</p>
        </div>

        <BlockYoutubeVideo url="https://www.youtube-nocookie.com/embed/rtDJCHpw8J4?si=cmm1imZyv4mbd0vH" />
      </AppPadding>

      <AppPadding class="py-8 w-full flex flex-col items-center">
        <div class="sm:px-12">
          <UCarousel v-slot="{ item }" :items="posters" :ui="{ item: 'xl:basis-1/2' }" arrows>
            <div class="w-full mx-auto flex flex-col items-center">
              <NuxtPicture :src="item" class="max-w-[500px] w-full" width="500" sizes="500px" format="webp" densities="1x" />
              <p class="text-center mt-2.5">
                <NuxtLink class="underline hover:text-hip-blue transition" to="https://www.fluhartberg.com/">
                  Flu Hartberg
                </NuxtLink>
              </p>
            </div>
          </UCarousel>
        </div>

        <div class="max-w-[500px] xl:max-w-[1000px] w-full flex flex-col py-12">
          <p class="mb-4 text-center text-hip-orange text-lg">
            ARTISTER 2025
          </p>
          <div class="grid grid-cols-3 gap-1">
            <NuxtLink v-for=" artist in artister" :key="artist.label" :to="artist.link" class="underline hover:text-hip-blue text-center transition plausible-event-name=utforsk-artist font-bold">
              {{ artist.label }}
            </NuxtLink>
          </div>
        </div>
      </AppPadding>

      <AppPadding class="w-full">
        <BlockImageCarousel />
      </AppPadding>
    </div>
  </main>
</template>
