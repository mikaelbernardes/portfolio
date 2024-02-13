'use client';
import { useState } from 'react';

type ClientPostsProps = {
    items: {
      title: string;
      content: React.ReactNode;
    }[];
  };

export function ClientPosts({
	items
}: ClientPostsProps ){
	const [filterInput, setFilterInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterInput(e.target.value);
	};
  
	const filteredItems = items
		.filter((item) => item.title.toLowerCase().includes(filterInput.toLowerCase()))
		.map((item) => item.content);

	return (
		<div className='flex flex-col items-center justify-center pt-4'>
			<div className='flex items-center gap-4 md:gap-10 w-full'>
				<p className='text-T100 text-lg md:text-2xl font-bold'>Posts</p>
			</div>
			<input 
				className='bg-B200 w-96 border-2 border-B300 focus:outline-none text-T300 focus:border-2 focus:border-P100 px-2 rounded-md'
				type="text"
				placeholder='Search posts...'
				value={filterInput} 
				onChange={handleChange}
			/>
			<main className='w-full h-fit text-xs font-light text-T100 flex flex-col px-4 md:px-16 mt-6 md:text-lg pb-6 gap-5'>
				<ul className='flex flex-col gap-6'>
					{filteredItems}
				</ul>
			</main>
		</div>
	);
}