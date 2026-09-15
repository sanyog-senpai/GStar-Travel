import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unicorn from "eslint-plugin-unicorn";

const eslintConfig = defineConfig([
  // 1. Core Next.js & React performance/accessibility rules
  ...nextVitals,

  // 2. Next.js TypeScript rules
  ...nextTs,

  // 3. Global ignore pattern for build artifacts
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // 4. Custom plugin definitions and rules
  {
    plugins: {
      unicorn,
    },
    rules: {
      // Enforce kebab-case file naming (e.g., user-profile.tsx)
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["^README\\.md$"],
        },
      ],

      // Enforce `import type { ... }` for pure TypeScript types
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      // Enforce consistent naming conventions across variables, functions, and types
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
    },
  },
]);

export default eslintConfig;
