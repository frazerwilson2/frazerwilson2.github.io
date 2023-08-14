import { Post } from "./types";

type QueryPosts = {
  posts: Post[];
  total: number;
};

export default async (page = 1, perPage = 10): Promise<QueryPosts> => {
  let total = 0;
  return fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1691762707
    &page=${page}
    &per_page=${perPage}
    &starts_with=posts%2F&token=up34xEwUnjFp7rluvcfoHwtt`
  )
    .then((response): Promise<{ stories: Post[] }> => {
      total = parseInt(response.headers.get("Total") || "0");
      return response.json();
    })
    .then((data: { stories: Post[] }) => {
      return { posts: data.stories, total };
    });
};
