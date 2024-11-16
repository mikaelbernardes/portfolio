import { getPosts } from "../../_notion";

export async function GET(req: Request) {
	const posts = await getPosts();
	return Response.json(posts);
}
