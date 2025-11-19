<template>
  <main >
    <PageTitle>2025</PageTitle>
    <div class="flex flex-col items-center">

      <AppPadding class="border-b py-8 border-hip-orange w-full flex flex-col gap-2.5 items-center">
        <BlockYoutubeVideo url="https://www.youtube-nocookie.com/embed/VlhfJJ1ibVw?si=aLhsFcXc3gUVtkSf"/>
        <BlockYoutubeVideo url="https://www.youtube-nocookie.com/embed/ij2EN4NgYEo?si=gwIeX2L-pIIEl8ro"/>
      </AppPadding>

      <AppPadding class="border-b py-8 border-hip-orange w-full">
        <p>Artister 2025</p>
        <ul>
          <li v-for=" artist in artister" :key="artist.label"  class="list-disc list-inside">
            <NuxtLink :to="artist.link" class="underline">{{ artist.label }}</NuxtLink>
          </li>
        </ul>
      </AppPadding>

      <AppPadding class="border-b py-8 border-hip-orange w-full flex flex-col gap-2.5 items-center">
        <BlockImageCarousel/>
      </AppPadding>

      <AppPadding class="py-8 w-full flex flex-col gap-2.5 items-center">
        <NuxtPicture src="/images/poster.jpg" class="max-w-[500px]" width="500px" sizes="500px" />
        <p>
          Credit <NuxtLink class="underline" to="https://www.fluhartberg.com/">Flu Hartberg</NuxtLink>, 2024
        </p>
      </AppPadding>
    </div>
  </main>
</template>

<script lang="ts" setup>

const artister = [
  { label: 'Ronny Ver', link: 'https://open.spotify.com/artist/6fxH2Rxcx7QSv3YzCqxW1h?si=Ff5pCRe4RH27GK3kI3qUgg' },
  { label: 'Masselys', link: 'https://open.spotify.com/artist/6slHNTkNyK4uOPJimcuPNw' },
  { label: 'Gerilja', link: 'https://open.spotify.com/artist/1OPBKPgqguelzVZtQ0Hj4Y' },
  { label: 'Blindtärm', link: 'https://open.spotify.com/artist/5rFjZLsvuGb88z92nIZLl6?si=pDFr7Il-Qo-so0DsMEjLug' },
  { label: 'Deathhammer', link: 'https://open.spotify.com/artist/5mVI4OOATqklEKc0ZOFomS' },
  { label: 'Hayeminol', link: 'https://open.spotify.com/artist/1xljZ0p7YdqrqJL6qFfjR6?si=C7U24PljTXyGMgNGVcltcg' },
  { label: 'DNA? AND?', link: 'https://open.spotify.com/artist/0x3QK5FfoVylpbguFLdgPW' },
  { label: 'Shament', link: 'https://open.spotify.com/artist/62iQ1bsN2HelEi0ZEXcTzc?si=4QsGKfuvTI6SWd7Na6lbuA' },
  { label: 'Pumpegris', link: 'https://open.spotify.com/artist/6ffouJYBfWqrHFC05DK9MZ?si=Ksx7x4I8TE-Pm0xz5OIXvg' },
  { label: 'Drakånis', link: 'https://open.spotify.com/artist/4njbiof5XsDXCbUrpRVywk' },
  { label: 'Hans Kvist', link: 'https://open.spotify.com/artist/5JSkyF4VqH5L24P6BWEYw2' },
]

useSeoMeta({
  title: "Hærverk i Parken: 2025",
})
</script>


