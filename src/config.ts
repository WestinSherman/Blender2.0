import type { projects } from "./content/config";

export const PATHS = {
  home: "/",
  about: "/about",
  projects: "/projects",
  // posts: "/posts",
  finds: "/finds",
  error404: "/404",
} as const;

export const CONFIG = {
  site_title: "Brad Arnst | IT Architect",
  site_url: "https://brad.nexusseven.com",
  author: "Brad Arnst",
  email: "brad@nexusseven.com",
  description: "Brad Arnst: IT Architect!",
} as const;
