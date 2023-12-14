'use client';
import { linksData } from '@/shared/data/linksData';
import React from 'react';

export default function Home() {
	return (
		<main className='w-full h-fit text-xs font-light text-T100 flex flex-wrap px-8 md:px-16 mt-6 md:text-lg border-P100 pb-6 border-b-2'>
			<p>Hi, I'm <span className='text-P100 font-semibold'>Mikael Bernardes</span>, a <span className='text-P100 font-semibold'>frontend developer</span> specializing in <span className='text-P100 font-semibold'>ReactJS</span>, with more than <span className='text-P100 font-semibold'>2 years of experience</span> in the web development area. My portfolio is not only a showcase of my work, but also a space to share insights through my blog. My goal is to become a senior frontend developer, contributing to innovative projects globally. In addition to code, I dedicate time to classical guitar, believing that creativity transcends programming and music.</p>
			<div className="flex gap-4 mt-4 pl-4">
				{
					linksData.map((link, index) => (
						<a 
							href={link.link} 
							about={link.alt} 
							key={index} 
							className="text-lg md:text-3xl text-B300 hover:text-P100 cursor-pointer transition-all"
							target='_blank'
						>
							{React.createElement(link.img)}
						</a>
					))
				}
			</div>
		</main>
	);
}
