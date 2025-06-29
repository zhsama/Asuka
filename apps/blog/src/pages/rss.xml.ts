import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { IdToSlug } from "@/utils/hash";
import AsukaConfig from "~/asuka.config";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  // 获取所有博客文章
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  // 按发布时间排序
  const sortedPosts = posts.sort((a, b) => new Date(b.data.published).getTime() - new Date(a.data.published).getTime());

  return rss({
    title: AsukaConfig.title,
    description: AsukaConfig.description,
    site: context.site || AsukaConfig.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: `/posts/${IdToSlug(post.id)}`,
      categories: post.data.tags || [],
      author: `${AsukaConfig.email} (${AsukaConfig.username})`,
      customData: `
        <content:encoded><![CDATA[
          ${post.data.description}
        ]]></content:encoded>
        ${post.data.category ? `<category>${post.data.category}</category>` : ""}
        ${post.data.cover ? `<enclosure url="${post.data.cover}" type="image/jpeg"/>` : ""}
      `,
    })),
    customData: `
      <language>${AsukaConfig.locale === "zh-CN" ? "zh-cn" : "en-us"}</language>
      <managingEditor>${AsukaConfig.email} (${AsukaConfig.username})</managingEditor>
      <webMaster>${AsukaConfig.email} (${AsukaConfig.username})</webMaster>
      <generator>Astro v${import.meta.env.ASTRO_VERSION}</generator>
      <image>
        <url>${AsukaConfig.avatarUrl}</url>
        <title>${AsukaConfig.title}</title>
        <link>${AsukaConfig.site}</link>
      </image>
    `,
    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
      atom: "http://www.w3.org/2005/Atom",
    },
  });
}
