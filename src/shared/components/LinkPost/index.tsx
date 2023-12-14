import { useRouter } from 'next/navigation';

interface LinkPostProps {
    title: string,
    createdAt: string,
    description: string,
    route: number
}

function LinkPost({ title, createdAt, description, route}: LinkPostProps) {

	const router = useRouter();

	function handlePostRoute() {
		router.push(`post/${route}`);
	}

	return(
		<div className="w-full h-fit flex flex-col gap-1">
			<h2 onClick={handlePostRoute} className="text-P100 font-bold text-base md:text-2xl cursor-pointer hover:decoration-dashed hover:underline transition-all duration-700 hover:decoration-P100">{title}</h2>
			<span className="text-[8px] text-T100 md:text-sm">{createdAt}</span>
			<p className="text-[10px] text-T300 md:text-base">{description}</p>
		</div>
	);
}

export { LinkPost };