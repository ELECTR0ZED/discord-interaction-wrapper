import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {rules: {
    camelcase: "error",
    'dot-notation': "error",
    'no-console': "error",
    'no-duplicate-imports': "error",
    'no-empty-function': "error",
    'no-var': "error",
    'prefer-const': "error",
    'require-await': "error",
  }}
];