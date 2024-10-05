import { layout } from "./layout";
import { Post } from "./types";

export const formatDate = (d:string) => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const published = `${day}/${month}/${year}`;
  return published;
}

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
        const published = formatDate(post.published_at);
        return `
            <li class="post">
                ${
                  post.content.title
                    ? `<a href="/post/${post.slug}"><h2>${post.name}</h2></a>`
                    : `<h2 class="statement">${post.name}</h2>`
                }
                <span class="published">${published}</span>
            </li>`;
      })
      .join("")}
  </ul>
  <div class="prev-more">
    ${
      page > 1
        ? `<a class="" href="${page === 2 ? `/` : `/page/${page - 1}`}"><h2>Previous</h2></a>`
        : ""
    }
    ${
      hasNextPage
        ? `<div class=""><a href="/page/${page + 1}"><h2>Next</h2></a></div>`
        : ""
    }
  </div>
  `);
}
