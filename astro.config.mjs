import { defineConfig } from 'astro/config';

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import readingTime from "remark-reading-time";
import readingMdxTime from "remark-reading-time/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), react(), vue(), mdx({
    remarkPlugins: [readingTime, readingMdxTime]
  })],
  markdown: {
    syntaxHighlight: 'prism'
  },
});