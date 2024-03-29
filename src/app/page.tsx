'use server';
import { LinkPost } from '@/shared/components/LinkPost';
import { socialLinksData } from '@/shared/data/socialLinksData';
import { PostProps } from '@/types/PostsProps';
import React from 'react';
import { getPosts } from './_services/notion';
import Link from 'next/link';
import { useGetYearsOfExperience } from '../utils/useGetYearsOfExperience';
import { formatDate } from '@/utils/AddLeadingZero';

export default async function Home() {
	
	const posts = await getPosts();

	const { yearsOfExperience } = useGetYearsOfExperience();

	return (
		<>
			<main className='w-full h-fit text-xs font-light text-T100 flex flex-wrap px-8 md:px-16 mt-6 md:text-lg border-P100 pb-6 border-b-2'>
				<p>Hi, I'm <span className='text-P100 font-semibold'>Mikael Bernardes</span>, a <span className='text-P100 font-semibold'>frontend developer</span> specializing in <span className='text-P100 font-semibold'>ReactJS</span>, with more than <span className='text-P100 font-semibold'>{yearsOfExperience} years of experience</span> in the web development area. My portfolio is not only a showcase of my work, but also a space to share insights through my blog. My goal is to become a senior frontend developer, contributing to innovative projects globally. In addition to code, I dedicate time to classical guitar, believing that creativity transcends programming and music.</p>
				<div className="flex gap-4 mt-4 pl-4">
					{
						socialLinksData.map((link, index) => (
							<Link
								href={link.link} 
								about={link.alt}
								title={link.alt}
								aria-label={link.alt}
								key={index} 
								className="text-lg md:text-3xl text-B300 hover:text-P100 cursor-pointer transition-all"
								target='_blank'
							>
								{React.createElement(link.img)}
							</Link>
						))
					}
				</div>
			</main>
			<section className="mt-6 px-8 md:px-16">
				<p className='text-T300 text-sm md:text-lg'>Blog (Recent Posts)</p>
				<section className="flex flex-col gap-6 mt-6 mb-11">
					{posts
						.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
						.slice(0, 4)
						.map((post: PostProps) => (
							<LinkPost
								key={post.id}
								title={post.title}
								createdAt={formatDate(new Intl.DateTimeFormat('en-US').format(new Date(post.createdAt)))}
								slug={post.slug}
								tags={post.tags}
								description={post.description}
							/>
						))}
				</section>
			</section>
			<div className="w-full flex items-center justify-center">
				<Link className='text-sm text-T300 uppercase animate-pulse' href={'/posts'}>clique para ver mais →</Link>
			</div>
		</>
	);
}
