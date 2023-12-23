/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { LinkPost } from '@/shared/components/LinkPost';
import { PostProps } from '@/types/posts';
import { getPosts } from '../_services/notion';

export default async function PostsHome() {

	const posts = await getPosts();

	return (
		<main className='w-full h-fit text-xs font-light text-T100 flex flex-col px-4 md:px-16 mt-6 md:text-lg pb-6 gap-5'>
			<div className='flex items-center gap-4 md:gap-10'>
				<p className='text-T100 text-lg md:text-2xl font-bold'>Posts</p>
			</div>
			<ul className='flex flex-col gap-6'>
				{posts.map((post: PostProps) => (
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
}
