import { defineCollection, z } from "astro:content";
import { CONFIG } from "config";

export const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publicationDate: z.coerce.date(),
    category: z.enum(["dev", "musings", "life"]),
    public: z.boolean().default(true),
    editDate: z.coerce.date().optional(),
    author: z.string().default(CONFIG.author),
    externalUrl: z.string().optional(),
  }),
});

export const finds = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    link: z.string(),
    description: z.string(),
    type: z.enum(["video", "article", "book", "website", "artstation", "youtube"]),
    publicationDate: z.coerce.date(),
    public: z.boolean().default(true),
  }),
});

export const cvs = defineCollection({
  type: "content",
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
