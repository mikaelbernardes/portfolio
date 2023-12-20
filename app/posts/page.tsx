/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { LinkPost } from '@/shared/components/LinkPost';
import { getPosts } from '../_services/notion';
import { PostProps } from '@/types/posts';

export default async function PostsHome() {
	try {
		const allPosts = await getPosts();

		return (
			<main className='w-full h-fit text-xs font-light text-T100 flex flex-col px-4 md:px-16 mt-6 md:text-lg pb-6 gap-5'>
				<div className='flex items-center gap-4 md:gap-10'>
					<p className='text-T100 text-lg md:text-2xl font-bold'>Posts</p>
					{/* <input
						type="search"
						className='h-4 bg-B200 rounded-sm md:h-6 w-18 outline-none focus:border-2 focus:border-P100'
					/>
					<select
						className='h-4 bg-B200 rounded-sm md:h-6 w-12'
					>
						{
							allPosts.map((tag) => (
								<option value={tag.tags}>{tag.tags}</option>
							))
						}
					</select> */}
				</div>
				<ul className='flex flex-col gap-6'>
					{allPosts.map((post: PostProps) => (
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
