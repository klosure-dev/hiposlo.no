import tailwindcss from '@tailwindcss/vite'

const cmsUrl = import.meta.env.VITE_PUBLIC_CMS_URL

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
    domains: cmsUrl ? [new URL(cmsUrl).hostname] : [],
    format: ['avif', 'webp'],
  },
  runtimeConfig: {
    public: {
      cms: {
        url: cmsUrl,
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
