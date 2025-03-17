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
    "nuxt-lucide-icons",
  ],
  i18n: {
    locales: [
      { code: "nl", files: ["nl.json5", "words.nl.json5"] },
      { code: "en", files: ["en.json5", "words.en.json5"] },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "nl",
    restructureDir: false,
  },
  lucide: {
    namePrefix: "Icon",
  },
});
