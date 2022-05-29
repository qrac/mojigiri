import { defineConfig } from "tsup"

export default defineConfig({
  entryPoints: ["src/*.ts"],
  target: "node14", // needed for working ESM
  format: ["esm"],
  clean: false,
  minify: false,
  dts: false,
  bundle: false,
  skipNodeModulesBundle: true,
  splitting: false,
})
