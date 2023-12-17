/* eslint-disable @typescript-eslint/no-explicit-any */
import { LinkPost } from '@/shared/components/LinkPost';
import { getPosts } from '../_services/notion';

interface PostProps {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
}

export default async function PostsHome() {
	try {
		const postszinhos = await getPosts();

		console.log(postszinhos);

		return (
			<>
				<p>blog</p>
				<ul>
					{postszinhos.map((post: PostProps) => (
						<LinkPost  
							title={post.title}
							createdAt={new Intl.DateTimeFormat('en-US').format(new Date(post.createdAt))}
							slug={post.slug}
							description='Esse é um exemplo de descrição de um post'
						/>
					))}
				</ul>
			</>
		);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return null;
	}
}
