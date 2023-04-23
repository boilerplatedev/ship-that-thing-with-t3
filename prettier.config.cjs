// /** @type {import("prettier").Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports"),require.resolve("prettier-plugin-tailwindcss")],
  importOrderSeparation: false,
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^~/(.*)$",
    "",
    "^[./]"
  ]
};

module.exports = config;
