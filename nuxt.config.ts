export default defineNuxtConfig({
  modules: [
  '@nuxt/ui', // harus ada ini
  '@nuxtjs/tailwindcss', 
  '@nuxt/eslint',
  '@vueuse/nuxt',
],
  css: ['@/assets/css/main.css'],
  tailwindcss: {
    viewer: true // pastikan ini true
  }
})