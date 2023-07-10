import resolve from "@rollup/plugin-node-resolve";
import packageJson from "./package.json" assert { type: "json" };
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [json(), resolve()],
  },
];
