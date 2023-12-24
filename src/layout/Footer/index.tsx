

function Footer() {

	return(
		<footer 
			className="w-full h-32 flex items-end justify-center pb-4 text-T100"
			data-cy='footer'
		>
			<p 
				className="text-center text-xs"
				data-cy='footer-text'
			>	2023 
				<br /> 
				copyright © 
				<br /> 
				Mikael Bernardes
			</p>
		</footer>
	);
}

export { Footer };