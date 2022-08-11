module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/prefer-nullish-coalescing": "error",
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: ["node_modules"],
};
