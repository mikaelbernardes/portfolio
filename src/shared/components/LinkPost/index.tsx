
interface LinkPostProps {
    title: string,
    createdAt: string,
    description: string
}

function LinkPost({ title, createdAt, description}: LinkPostProps) {

	return(
		<div className="w-full h-fit flex flex-col gap-1">
			<h2 className="text-P100 font-bold text-base md:text-2xl">{title}</h2>
			<span className="text-[8px] text-T100 md:text-sm">{createdAt}</span>
			<p className="text-[10px] text-T300 md:text-base">{description}</p>
		</div>
	);
}

export { LinkPost };