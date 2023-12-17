'use client';
import ReactMarkdown from 'react-markdown';
import { getPost } from '../../_services/notion';

export default async function Post ({
	params,
}: {
	params: {
		slug:string
	}
}){

	const post = await getPost(params.slug);

	return(
		<main className='w-screen h-screen flex flex-col'>
			<h1 className='text-P100 text-5xl mt-6 mb-6'>{post.title}</h1>
			<section className='text-T300'>
				<ReactMarkdown
					components={{
						h2: ({ ...props }) => <h2 className='text-2xl' {...props}/>
					}}
				>{post.content}</ReactMarkdown>
			</section>
		</main>
	);
}