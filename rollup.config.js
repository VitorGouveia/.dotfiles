import { uglify } from "rollup-plugin-uglify"
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: ["./build/index.js"],
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    name: "bundle",
  },

  plugins: [
    uglify(),
    nodeResolve({
      ignoreGlobal: false,
      include: ['node_modules/**'],
    }),
    commonjs(),
    json(),
    nodePolyfills()
  ],
}
