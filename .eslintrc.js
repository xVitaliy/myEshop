module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
  },
};
