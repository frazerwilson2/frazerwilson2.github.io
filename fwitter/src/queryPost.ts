import StoryblokClient from "storyblok-js-client";
import { RenderedPost } from "./types";

export default async (slug: string): Promise<RenderedPost> => {
  const Storyblok = new StoryblokClient({
    accessToken: "up34xEwUnjFp7rluvcfoHwtt",
  });
  return fetch(
    `https://api.storyblok.com/v2/cdn/stories/posts/${slug}?cv=1691762707&token=up34xEwUnjFp7rluvcfoHwtt`
  )
    .then((response): Promise<{ story: RenderedPost }> => {
      return response.json();
    })
    .then((data) => {
      const html = Storyblok.richTextResolver.render(
        data.story.content.long_text
      );
      return { ...data.story, html };
    });
};
