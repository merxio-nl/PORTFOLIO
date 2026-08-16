import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Structured, validated project/case-study data, one folder per locale
// (en/, ru/) so each entry's id is "<lang>/<slug>". Narrative fields
// (problem/solution/outcome) are intentionally optional — a project only
// gets a rich case study once those facts are actually known. Do not fill
// them with invented content; see docs/PROJECT.md and docs/DECISIONS.md
// in the repo root.
const projects = defineCollection({
  loader: glob({ pattern: '*/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Concise category/context metadata shown on the overview card,
    // e.g. "Construction & renovation · Netherlands".
    category: z.string(),
    tagline: z.string(),
    // Visual weight only — never rendered as a "flagship"/"best" label.
    featured: z.boolean().default(false),
    order: z.number(),
    summary: z.string(),

    client: z.string().optional(),
    role: z.string().optional(),
    year: z.string().optional(),
    location: z.string().optional(),
    timeline: z.string().optional(),

    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    tags: z.array(z.string()).default([]),

    // Fallback/meta image — case studies primarily use siteShowcase.
    coverImage: z.string(),
    coverImageAlt: z.string(),

    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),

    problem: z.string().optional(),
    solution: z.string().optional(),
    outcome: z.string().optional(),

    // Real photos of the client's underlying work — supporting context,
    // not the primary portfolio cover image.
    workGallery: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    // The delivered website itself: desktop and mobile screenshots. This
    // is the primary visual — used in both the overview card's device
    // composition and the case study showcase.
    siteShowcase: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    siteShowcaseMobile: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),

    testimonial: z
      .object({ quote: z.string(), author: z.string() })
      .optional(),
  }),
});

export const collections = { projects };
