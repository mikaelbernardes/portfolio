
interface LinkPostProps {
    title: string,
    createdAt: string,
    description: string
}

function LinkPost({ title, createdAt, description}: LinkPostProps) {

	return(
		<div className="w-full h-20">
			<h2 className="text-P100 font-bold">{title}</h2>
			<span className="text-xs text-T100">{createdAt}</span>
			<p className="text-xs text-T300">{description}</p>
		</div>
	);
}

export { LinkPost };