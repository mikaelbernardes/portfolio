// 'use server';
import { Client } from '@notionhq/client';
import { NotionDatabaseResponse } from './types';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getPosts() {
	const databaseId = '75fd422eb8bf44a888aa7f157b373062';
	const response = await notion.databases.query({
		database_id: databaseId,
	});

	const typedResponse = (response as unknown) as NotionDatabaseResponse;

	return typedResponse.results.map((post) => {
		const title = post.properties.title?.title?.[0]?.text.content || 'Untitled';
		const slug = post.properties.slug?.rich_text?.[0]?.plain_text || 'no-slug';

		return {
			id: post.id,
			title: title,
			slug: slug,
			createdAt: post.created_time,
		};
	});
}