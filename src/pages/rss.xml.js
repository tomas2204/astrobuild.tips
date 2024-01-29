import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('tips');
  return rss({
    title: "AstroBuild.tips",
    description: "Astro Page Test",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`
    }))

  })
}

export default {
  get
}