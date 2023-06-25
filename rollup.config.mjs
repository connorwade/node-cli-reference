/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/cli.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
};
