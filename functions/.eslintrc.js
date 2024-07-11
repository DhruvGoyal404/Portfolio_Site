module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "max-len": ["error", {code: 80}],
  },
};
