import { layout } from "./layout";
import { Post } from "./types";

export default function renderIndex({ posts }: { posts: Post[] }) {
  return layout(`
  ${posts
    .map(
      (post) => `
          <div class="post">
              ${post.name}
              ${
                post.content.title
                  ? `<a href="/post/${post.slug}">Read it</a>`
                  : ""
              }
          </div>`
    )
    .join("")}
  `);
}
