import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/plausible',
  ],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  plausible: {
    ignoredHostnames: ['localhost'],
    autoOutboundTracking: true,
    apiHost: import.meta.env.NUXT_PUBLIC_PLAUSIBLE_API_BASE ?? '',
  },
  image: {
    format: ['avif', 'webp'],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
