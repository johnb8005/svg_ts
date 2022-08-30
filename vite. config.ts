import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// this the default/base configuration
const baseConfig = {
  plugins: [react()],
  test: {
    // ...
  },
};

// https://vitejs.dev/config/
// conditional config: https://vitejs.dev/config/#conditional-config
export default defineConfig(({ mode }) => {
  // if  `mode===ghpages`: we add the path prefix to match the path prefix of gh pages
  if (mode === "ghpages") {
    return { ...baseConfig, base: "/svg_ts/" };
  }

  return baseConfig;
});
