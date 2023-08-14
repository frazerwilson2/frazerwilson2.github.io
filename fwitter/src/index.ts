import queryPosts from "./queryPosts";
import queryPost from "./queryPost";
import renderIndex from "./renderIndex";
import renderPost from "./renderpost";

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
  //
  // Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
  // MY_SERVICE: Fetcher;
}

const opts = {
  headers: {
    "content-type": "text/html;charset=UTF-8",
  },
};

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const params = new URL(request.url).pathname.split("/");

    if (params[1] === "post") {
      const post = await queryPost(params[2]);
      if (post) {
        return new Response(renderPost({ post }), opts);
      }
    }

    const posts = await queryPosts();
    return new Response(renderIndex({ posts }), opts);
  },
};
