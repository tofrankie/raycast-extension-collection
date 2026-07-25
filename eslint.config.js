import { defineConfig } from "@tofrankie/eslint";
import packageSortConfig from "@tofrankie/eslint/raycast";

export default defineConfig(
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/*.md", "**/raycast-env.d.ts"],
    typescript: true,
    stylistic: {
      overrides: {
        "style/semi": ["error", "always"],
        "style/quotes": ["error", "double"],
      },
    },
    formatters: {
      // https://prettier.io/docs/options
      // overrides: https://github.com/tofrankie/config/blob/main/packages/prettier/src/base.ts
      prettierOptions: {
        printWidth: 120,
        singleQuote: false,
        semi: true,
        arrowParens: "always",
        trailingComma: "all",
        htmlWhitespaceSensitivity: "css",
      },
    },
  },
  {
    ...packageSortConfig,
    files: ["extensions/**/package.json"],
  },
);
