// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/globals.css"],
  icon: {
    serverBundle: {
      collections: ["uil"], // <!--- this
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/icon"],
  tailwindcss: {
    exposeConfig: true,
  },
});
