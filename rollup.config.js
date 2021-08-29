import { uglify } from "rollup-plugin-uglify"
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";

export default {
  input: ["./build/index.js"],
  output: {
    file: "./dist/bundle.js",
    format: "iife",
    name: "bundle",
  },

  plugins: [uglify(), nodeResolve(), commonjs(), json()],
}
