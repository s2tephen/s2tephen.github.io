import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: file("src/data/work.json"),
  schema: ({ image }) => z.object({
    id: z.string(),
    company: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    logoPath: image(),
    timestamp: z.string(),
    priority: z.boolean(),
  }),
});

export const collections = { work };