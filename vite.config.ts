import { resolve } from 'path';

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import flowbiteReact from "flowbite-react/plugin/vite";

import path from 'node:path'
import url from 'node:url'

const _dirname = path.dirname(url.fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), flowbiteReact()],
   resolve: {
    alias: {
      "@shared": resolve(_dirname, "./shared"),
    }
  },
});
