import Link from 'next/link';
import { CardProjectsProps } from '../../types';


function ProjectCard({
	name,
	description,
	initDate,
	finishDate,
	principalLanguage,
	id
}: CardProjectsProps) {

	const iconElements: React.ReactElement[] = principalLanguage.map((IconComponent, index) => (
		<IconComponent key={index} />
	));

	return (
		<Link href={`/projects/${id}`} className="flex flex-col border-2 border-P100 rounded-xl p-4 cursor-pointer mt-6">
			<div className='flex items-center w-full h-fit justify-between'>
				<span className='text-[20px] text-P100 flex gap-2'>
					{iconElements}
				</span>
				<div className='flex items-center text-T300 gap-1'>
					<span>{initDate}</span>
					<span>-</span>
					<span>{finishDate}</span>
				</div>
			</div>
			<h2 className='text-P100 text-[22px]'>{name}</h2>
			<p className='text-T100 '>{description.substring(0, 240)}</p>
		</Link>
	);
}

export { ProjectCard };