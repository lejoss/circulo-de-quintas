type ToneProps = {
	note: String,
	onClick: (note: String) => void
}
export default function Tone(props: ToneProps) {
	return (
		<li onClick={() => props.onClick(props.note)}>
			<div className="text">{props.note}</div>
		</li>
	)
}