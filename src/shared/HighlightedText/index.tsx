
interface HighlightedTextProps {
    text: string,
    fontSize?: string,
    fontHeight?: string
}

function HighlightedText({ text, fontHeight, fontSize }: HighlightedTextProps) {


	return (
		<p
			className={`
                text-P100
                ${fontHeight}
                ${fontSize}
            `}
		>{text}</p>
	);
}

export { HighlightedText };