module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "no-console": "error",
    "linebreak-style": ["error", "unix"],
    curly: ["error", "all"],
  },
};
