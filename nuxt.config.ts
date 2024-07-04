export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  i18n: {
    locales: [{ code: "nl", file: "nl.json5" }],
    lazy: true,
    langDir: "locales",
    defaultLocale: "nl",
  },
});
