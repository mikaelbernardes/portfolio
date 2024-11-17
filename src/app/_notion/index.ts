"use server";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const { DATABASE_ID } = process.env;

export async function getPosts() {
	const response = await notion.databases.query({
		database_id: DATABASE_ID || "",
	});

	const typedResponse = response as unknown as NotionDatabaseResponse;

	console.log(response);

	return typedResponse.results.map((post) => {
		const title = post.properties.title?.title?.[0]?.text.content || "Untitled";
		const slug = post.properties.slug?.rich_text?.[0]?.plain_text || "no-slug";
		const tags = post.properties.tags?.multi_select
			? post.properties.tags.multi_select.map((tag) => tag.name)
			: [""];
		const description =
			post.properties.description?.rich_text?.[0]?.plain_text || "";
		const isBlog = post.properties.isBlog.checkbox;
		const isProjectKey = post.properties.isProjectKey.checkbox;
		const isProfessionalExperience = post.properties.isProjectKey.checkbox;

		return {
			id: post.id,
			title: title,
			slug: slug,
			tags: tags,
			createdAt: post.created_time,
			description: description,
			isBlog,
			isProjectKey,
			isProfessionalExperience,
		};
	});
}

export async function getPost(slug: string) {
	const response = await notion.databases.query({
		database_id: DATABASE_ID || "",
		filter: {
			or: [
				{
					property: "slug",
					rich_text: {
						equals: slug,
					},
				},
			],
		},
	});

	const pageId = response.results[0].id;

	const n2m = new NotionToMarkdown({ notionClient: notion });

	const mdblocks = await n2m.pageToMarkdown(pageId);
	const mdString = n2m.toMarkdownString(mdblocks);

	const typedResponse = response as unknown as NotionDatabaseResponse;

	return {
		title: typedResponse.results[0].properties.title.title[0].plain_text,
		content: mdString.parent,
	};
}
