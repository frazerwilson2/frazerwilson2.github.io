import { layout } from "./layout";
import { RenderedPost } from "./types";

export default function renderIndex({ post }: { post: RenderedPost }) {
  return layout(
    `
        <a href="/">Back</a>
        <h1>${post.content.title}</h1>
        ${
          post.content.image &&
          `<img src="${post.content.image}" alt="${post.content.title}" />`
        }
        ${post.html}
    `,
    post.content.title
  );
}
