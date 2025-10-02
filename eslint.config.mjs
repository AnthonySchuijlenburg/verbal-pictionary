// eslint.config.mjs
import withNuxt from "./.nuxt/eslint.config.mjs";
import vuePlugin from "eslint-plugin-vue";

export default withNuxt({
  plugins: {
    vue: vuePlugin,
  },
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
});
