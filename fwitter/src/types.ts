export type Post = {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  content: {
    _uid: string;
    image: string;
    intro: string;
    title: string;
    author: string;
    component: "Post";
    long_text: {
      type: "doc";
      content: unknown[];
    };
  };
  slug: string;
  full_slug: string;
  first_published_at: string;
};

export type RenderedPost = Post & { html: string };
