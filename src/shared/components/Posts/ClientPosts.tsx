'use client';
import { useClientPosts } from './hooks/useClientPosts';

type ClientPostsProps = {
	items: {
		title: string;
		content: React.ReactNode;
		tags: string[];
	}[];
};

export function ClientPosts({
	items
}: ClientPostsProps) {

	const {
		filterInput,
		filteredItems,
		handleChange,
		handleTagChange,
		selectedTag,
		tagKeys
	} = useClientPosts({items});

	return (
		<div className='flex flex-col items-center justify-center pt-4'>
			<div className='flex items-center gap-4 md:gap-10 w-full'>
				<p className='text-T100 text-lg md:text-2xl font-bold'>Posts</p>
			</div>
			<div className='flex w-full h-fit pl-48'>
				<input
					className='bg-B200 w-96 border-2 border-B300 focus:outline-none text-T300 focus:border-2 focus:border-P100 px-2 rounded-md'
					type="text"
					placeholder='Search posts...'
					value={filterInput}
					onChange={handleChange}
				/>
				<select
					className='bg-B200 w-36 border-2 border-B300 focus:outline-none text-T300 focus:border-2 focus:border-P100 px-2 rounded-md ml-10'
					value={selectedTag}
					onChange={handleTagChange}
				>
					<option disabled value="" selected>select tag</option>
					<option value="">All</option>
					{tagKeys.map(tag => (
						<option key={tag} value={tag}>{tag}</option>
					))}
				</select>
			</div>
			<main className='w-full h-fit text-xs font-light text-T100 flex flex-col px-4 md:px-16 mt-6 md:text-lg pb-6 gap-5'>
				<ul className='flex flex-col gap-6'>
					{filteredItems}
				</ul>
			</main>
		</div>
	);
}
