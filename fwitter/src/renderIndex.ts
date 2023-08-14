import { layout } from "./layout";
import { Post } from "./types";

export default function renderIndex({
  posts,
  total,
  page,
  hasNextPage,
}: {
  posts: Post[];
  total: number;
  page: number;
  hasNextPage: boolean;
}) {
  return layout(`
  <ul class="posts">
    ${posts
      .map((post) => {
        const date = new Date(post.published_at);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const published = `${day}/${month}/${year}`;
        return `
            <li class="post">
                ${
                  post.content.title
                    ? `<a href="/post/${post.slug}"><h2>${post.name}</h2></a>`
                    : `<h2>${post.name}</h2>`
                }
                <span class="published">${published}</span>
            </li>`;
      })
      .join("")}
  </ul>
    ${
      page > 1
        ? `<a href="${page === 2 ? `/` : `/page/${page - 1}`}"><< Previous</a>`
        : ""
    }
    ${
      hasNextPage
        ? `<div class="more"><a href="/page/${page + 1}">More >></a></div>`
        : ""
    }
  `);
}
