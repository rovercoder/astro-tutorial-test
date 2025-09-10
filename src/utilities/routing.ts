import type { InferEntrySchema, RenderedContent } from "astro:content";

export function getPostPath(post: {
    id: string;
    body?: string;
    collection: "blog";
    data: InferEntrySchema<"blog">;
    rendered?: RenderedContent;
    filePath?: string;
}): string {
    return `/posts/${post.id}/`;
}

export function getTagPath(tag: string): string {
    return `/tags/${tag}/`;
}
