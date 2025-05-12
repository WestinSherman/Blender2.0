// @ts-check
import { defineConfig } from 'astro/config';
import { CONFIG } from './src/config';
import mdx from '@astrojs/mdx';

import netlify from "@astrojs/netlify";

export default defineConfig({
  base: "/",
  integrations: [mdx()],

  content: {
      collections: {
          posts: {
              schema: "src/content/config.ts#posts",
          },
          finds: {
              schema: "src/content/config.ts#finds",
          },
          projects: {
              schema: "src/content/config.ts#projects",
          },
      },
  },

  adapter: netlify(),
});