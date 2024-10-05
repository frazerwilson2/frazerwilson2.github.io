import { layout } from "./layout";
import { formatDate } from "./renderIndex";
import { RenderedPost } from "./types";

export default function renderIndex({ post }: { post: RenderedPost }) {
  const publishdate = formatDate(post.published_at);
  return layout(
    `
        <div class="prev-more back"><a href="/"><h2>Back</h2></a></div>
        <div class="post-content">
          <div class="post-content-inner">
            <h1>${post.content.title}</h1>
            <span class="published">${publishdate}</span>
            ${post.html}
          </div>
          ${
            post.content.image &&
            `<img src="${post.content.image}" alt="${post.content.title}" />`
          }
        </div>
    `,
    post.content.title
  );
}
