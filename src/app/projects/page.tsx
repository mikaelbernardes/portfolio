import { getPosts } from "../_notion";

export default async function Page() {
	const posts = await getPosts();

	console.log(posts);

	return <></>;
}
