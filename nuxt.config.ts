export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-10-02",

  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "nuxt-lucide-icons",
    "@nuxt/eslint",
  ],

  i18n: {
    locales: [
      { code: "nl", language: "nl-NL", files: ["nl.json5", "words.nl.json5"] },
      { code: "en", language: "en-US", files: ["en.json5", "words.en.json5"] },
      { code: "pl", language: "pl-PL", files: ["pl.json5", "words.pl.json5"] },
    ],
    langDir: "locales",
    defaultLocale: "nl",
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
    restructureDir: "app",
  },

  lucide: {
    namePrefix: "Icon",
  },
});
