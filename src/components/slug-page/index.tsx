"use client";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState, type CSSProperties } from "react";
import { useParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export function SlugPage() {
	const params = useParams<{ slug: string }>();
	const [post, setPost] = useState<PostContent>({
		content: "",
		title: "",
	});
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/post/${params.slug}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			setPost(data);
			setLoading(false);
		};
		fetchData();
	}, [params]);

	const stylesForMarkdown = {
		p: ({ _, children }: { _: unknown; children: React.ReactNode }) => (
			<p className="xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base text-TXT300">
				{children}
			</p>
		),
		strong: ({ _, children }: { _: unknown; children: React.ReactNode }) => {
			return (
				<span className="text-Primary font-semibold decoration-solid xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base">
					{children}
				</span>
			);
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		hr: ({ _, props }: { _: unknown; props: any }) => {
			return (
				<hr
					className="w-full h-[1px] text-Line my-6"
					{...props}
				/>
			);
		},
		h1: ({ _, children }: { _: unknown; children: React.ReactNode }) => {
			return (
				<h1
					className={`
					text-card-foreground font-bold xs:text-xl xs:mt-4 xs:mb-4 sm:text-xl sm:mt-4 sm:mb-4 md:text-3xl 
					md:mt-5 md:mb-5 lg:text-3xl lg:mt-5 lg:mb-5 xl:text-4xl xl:mt-6 xl:mb-6 
				`}>
					{children}
				</h1>
			);
		},
		h2: ({ _, children }: { _: unknown; children: React.ReactNode }) => {
			return (
				<h2
					className={`
					font-semibold xs:text-lg xs:mt-5 xs:mb-3 sm:text-lg sm:mt-5 sm:mb-3 md:text-2xl md:mt-6 md:mb-4 lg:text-2xl lg:mt-6 lg:mb-4 xl:text-3xl xl:mt-7 
					xl:mb-5 text-card-foreground 
				`}>
					{children}
				</h2>
			);
		},
		h3: ({ _, children }: { _: unknown; children: React.ReactNode }) => {
			return (
				<h3
					className={`
					text-card-foreground font-medium xs:text-base xs:mt-3 xs:mb-3 sm:text-base sm:mt-3 sm:mb-3 md:text-xl md:mt-4 md:mb-4 lg:text-xl lg:mt-4 
					lg:mb-4 xl:text-2xl xl:mt-5 xl:mb-5
				`}>
					{children}
				</h3>
			);
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		code: ({ node, className, children, ...props }: any) => {
			const match = /language-(\w+)/.exec(className || "");

			const newStyles: CSSProperties = {
				marginTop: "10px",
				border: "1px solid #DEDEDE",
				boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
				borderRadius: "8px",
				marginBottom: "10px",
				padding: "5px",
			};

			if (!match) {
				return (
					<code
						className={className}
						style={newStyles}
						{...props}>
						{children}
					</code>
				);
			}

			const syntaxHighlighterProps = {
				language: match[1],
				PreTag: "div",
				style: { ...coy, background: "none" },
				...props,
			};

			return (
				<div style={newStyles}>
					<SyntaxHighlighter {...syntaxHighlighterProps}>
						{String(children).replace(/\n$/, "")}
					</SyntaxHighlighter>
				</div>
			);
		},
		li: ({
			node,
			children,
		}: { node: { depth: number }; children: React.ReactNode }) => {
			const isNested = node.depth > 0;

			return (
				<li className={isNested ? "nested-list-item" : "top-level-list-item"}>
					{children}
				</li>
			);
		},
		ul: ({ _, children }: { _: unknown; children: React.ReactNode }) => (
			<ul className="text-card-foreground list-inside list-disc ml-5 flex flex-col gap-4">
				{children}
			</ul>
		),
		ol: ({ _, children }: { _: unknown; children: React.ReactNode }) => (
			<ol className="text-card-foreground list-inside list-decimal ml-5">
				{children}
			</ol>
		),
		blockquote: ({
			_,
			children,
		}: { _: unknown; children: React.ReactNode }) => (
			<blockquote className="text-card-foreground border-l-4 border-Primary pl-4 py-2 my-4">
				{children}
			</blockquote>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		a: ({ node, children, href }: any) => (
			<a
				className="text-card-foreground underline hover:no-underline"
				target="_blank"
				href={href}
				rel="noreferrer">
				{children}
			</a>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		img: ({ node, src, alt }: any) => (
			<img
				className="mx-auto my-4"
				src={src}
				alt={alt}
			/>
		),
	};

	return (
		<main className="xs:px-5 sm:px-20 md:px-32 lg:px-56 xl:px-72 pb-4 xl:pb-12">
			{loading ? (
				<div className="flex flex-col w-full h-fit gap-4 my-4">
					{Array.from({ length: 16 }).map((_, index) => (
						<Skeleton
							key={index}
							className="w-full h-8"
						/>
					))}
				</div>
			) : (
				<ReactMarkdown
					remarkPlugins={[gfm]}
					rehypePlugins={[rehypeRaw, rehypeStringify]}
					components={stylesForMarkdown as unknown as Partial<Components>}>
					{post.content}
				</ReactMarkdown>
			)}
		</main>
	);
}
