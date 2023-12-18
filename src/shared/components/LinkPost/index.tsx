import Link from 'next/link';
import { FaClockRotateLeft } from 'react-icons/fa6';

interface LinkPostProps {
  title: string;
  createdAt: string;
  description?: string;
  slug: string;
  tags: string[];
}

function LinkPost({ title, createdAt, description, slug, tags }: LinkPostProps) {
	return (
		<div className="w-full h-fit flex gap-1 flex-col">
			<Link
				href={`posts/${slug}`}
				className="text-P100 font-bold text-base md:text-2xl cursor-pointer hover:decoration-dashed hover:underline transition-all duration-700 hover:decoration-P100"
			>
				{title}
			</Link>
			<span className="text-[8px] flex items-center gap-1 text-T100 md:text-sm"><FaClockRotateLeft />{createdAt}</span>
			<div className="flex gap-2">
				{tags.map((tag, index) => (
					<p
						key={index}
						className={`text-[8px] rounded-sm px-1 text-T300 ${tag === '#front' ? 'bg-P100' : tag === '#back' ? 'bg-Back' : ''}`}
					>
						{tag}
					</p>
				))}
			</div>
			<p className="text-[10px] text-T300 md:text-base">{description}</p>
		</div>
	);
}

export { LinkPost };
