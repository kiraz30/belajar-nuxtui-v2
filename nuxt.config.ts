export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss' // harus ada ini
  ],
  css: ['@/assets/css/main.css'],
  tailwindcss: {
    viewer: true // pastikan ini true
  }
})