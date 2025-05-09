import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

import { CONFIG } from "./config";

export enum FoundType {
  video = "video",
  article = "article",
  book = "book",
  website = "website",
  artstation = "artstation",
  youtube = "youtube",
}

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string().default(CONFIG.author),
    externalUrl: z.string().optional(),
    description: z.string(),
    category: z.string(),
    publicationDate: z.coerce.date(),
    public: z.boolean().default(true),
    editDate: z.coerce.date().optional(),
  }),
});

const finds = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/finds" }),
  schema: z.object({
    title: z.string(),
    link: z.string(),
    description: z.string(),
    type: z.nativeEnum(FoundType),
    publicationDate: z.coerce.date(),
    public: z.boolean().default(true),
  }),
});

const cvs = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cvs" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    publicationDate: z.coerce.date(),
    editDate: z.coerce.date().optional(),
    language: z.string(),
    public: z.boolean().default(true),
  }),
});

export const collections = { posts, finds, cvs };
