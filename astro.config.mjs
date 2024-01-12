import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";
import image from "@astrojs/image";

export default defineConfig({
  site: 'https://hyeonho2010.vercel.app',
  sitemap: true,
  integrations: [sitemap(), mdx(), image(), lit()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});