import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }], // console.logは禁止
      "eqeqeq": ["error", "always"], // 厳密等価演算子を強制
      "no-var": "error", // varの使用を禁止し、let/constを強制
      "prefer-const": "error" // constが使用可能な場合はconstを強制
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  }
];
