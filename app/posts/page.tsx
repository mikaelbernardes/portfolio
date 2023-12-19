/* eslint-disable @typescript-eslint/no-explicit-any */

import { LinkPost } from '@/shared/components/LinkPost';
import { getPosts } from '../_services/notion';
import { PostProps } from '@/types/posts';

export default async function PostsHome() {
	try {
		const postszinhos = await getPosts();

		console.log(postszinhos);

		return (
			<main className='w-full h-fit text-xs font-light text-T100 flex flex-col px-8 md:px-16 mt-6 md:text-lg pb-6'>
				<p>Posts</p>
				<ul>
					{postszinhos.map((post: PostProps) => (
						<LinkPost
							key={post.id}
							title={post.title}
							createdAt={new Intl.DateTimeFormat('en-US').format(new Date(post.createdAt))}
							slug={post.slug}
							tags={post.tags}
						/>
					))}
				</ul>
			</main>
		);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return null;
	}
}
