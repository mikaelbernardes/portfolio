/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { getPost } from '../../_services/notion';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CSSProperties } from 'react';
import React from 'react';

export default async function Post({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const post = await getPost(params.slug);

	const renderers = {
		strong: ({ node, children }: any) => {
			return <span className='text-P100 font-bold'>{children}</span>;
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
