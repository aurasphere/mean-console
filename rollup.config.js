import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json" assert { type: "json" };
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/index.js", // entry point
    output: {
      name: "mean-console", // package name
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      json(),
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
  {
    input: "src/index.js", // entry point
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      json(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
];
