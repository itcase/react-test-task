import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // Features/widgets in this mini-catalog are intentionally page-scoped.
    // Keep all other FSD rules strict (public API, layer imports, segments).
    rules: {
      "fsd/insignificant-slice": "off",
    },
  },
]);
