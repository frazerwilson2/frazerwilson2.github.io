import { Post } from "./types";

export default async (): Promise<Post[]> => {
  return fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1691762707
    &page=1
    &per_page=5
    &starts_with=posts%2F&token=up34xEwUnjFp7rluvcfoHwtt`
  )
    .then((response): Promise<{ stories: Post[] }> => {
      return response.json();
    })
    .then((data: { stories: Post[] }) => {
      return data.stories;
    });
};
