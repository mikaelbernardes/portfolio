/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import gfm from 'remark-gfm';
import { getPost, getPosts } from '../../_services/notion';
export default async function Post({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const post = await getPost(params.slug);
	const posts = await getPosts();

	const currentPost = posts.find(post => post.slug === params.slug);

	const renderers = {
		strong: ({ node, children }: any) => {
			return <span className='text-P100 font-bold'>{children}</span>;
		},
		h1: ({ node, children }: any) => {
			return <h1 className='text-T300 font-bold text-3xl mt-6 mb-6'>{children}</h1>;
		},
		h2:  ({ node, children }: any) => {
			return <h2 className='text-T300 font-semibold text-2xl mt-4 mb-4'>{children}</h2>;
		},
		code: ({ node, className, children, ...props }: any) => {
			const match = /language-(\w+)/.exec(className || '');

			if (!match) {
				return (
					<code className={className} {...props}>
						{children}
					</code>
				);
			}

			const style: { [key: string]: CSSProperties } = dracula;

			const syntaxHighlighterProps = {
				language: match[1],
				PreTag: 'div',
				style: style,
				...props,
			};

			return (
				<SyntaxHighlighter {...syntaxHighlighterProps as any}>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			);
		},
		ul: ({ node, children }: any) => {
			return <ul className='list-none'>{children}</ul>;
		},
		li: ({ node, children }: any) => {
			return (
				<li className="flex items-center">
					<span className='ml-2'>{children}</span>
				</li>
			);
		},
	};

	return (
		<main className='w-full min-h-screen flex flex-col pb-6 px-6 lg:px-0'>
			<h1 className='text-P100 text-5xl mt-6 mb-6'>{post.title}</h1>
			<section className='text-T100 flex flex-col gap-4'>
				<ReactMarkdown
					remarkPlugins={[gfm]}
					rehypePlugins={[rehypeRaw, rehypeStringify]}
					components={renderers}
				>
					{post.content}
				</ReactMarkdown>
			</section>
		</main>
	);
}
