import { defineCollection, z } from "astro:content";

const homeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const mainFeatureCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    icon: image(),
    subtitle: z.string(),
    image: image(),
  }),
});

const featureCollection = defineCollection({
  schema: ({image}) => z.object({
    nav: z.string(),
    summary: z.object({
      title: z.string(),
      description: z.string(),
    }),
    detail: z.object({
      title: z.string(),
      highlight: z.string(),
      description: z.string(),
    }),
    icon: image(),
  }),
})


const guideCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    steps: z.array(
      z.object({
        title: z.string(),
        image: image(),
      })
    ),
  }),
});

export const collections = {
  home: homeCollection,
  main_feature: mainFeatureCollection,
  feature: featureCollection,
  guide: guideCollection,
  feature_extra: homeCollection
}