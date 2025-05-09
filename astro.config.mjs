// @ts-check
import { defineConfig } from 'astro/config';
import { CONFIG } from './src/config';


export default defineConfig({
    base: "/",
    content: {
        collections: {
            posts: {
                schema: "src/content/config.ts#posts",
            },
            finds: {
                schema: "src/content/config.ts#finds",
            },
            cvs: {
                schema: "src/content/config.ts#cvs",
            },
        },
    },
});
