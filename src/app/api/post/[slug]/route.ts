import { getPost } from "@/app/_notion";

export async function GET(req: Request) {
	const slug = req.url.split("/").pop();
	const post = await getPost(slug || "");
	return Response.json(post);
}
