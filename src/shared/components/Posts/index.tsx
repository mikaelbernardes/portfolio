import { LinkPost } from '@/shared/components/LinkPost';
import { PostProps } from '@/types/PostsProps';
import { getPosts } from '../../../../app/_services/notion';
import { ClientPosts } from './ClientPosts';

type Post = {
	id: string;
	title: string;
	slug: string;
	tags: string[];
	createdAt: string;
	description: string;
} 

export async function Posts( ) {
	const posts : Post[] = await getPosts();

	const PostLinks = posts.map((post: PostProps) => ({
		title: post.title,
		content: <LinkPost
			key={post.id}
			title={post.title}
			createdAt={new Date(post.createdAt).toLocaleDateString('pt-BR')}
			slug={post.slug}
			tags={post.tags}
			description={post.description}
		/>,
		tags: post.tags
	}));

	return <ClientPosts items={PostLinks}/>;
}
