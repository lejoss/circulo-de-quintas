export default function Tone(props) {
	return (
		<li onClick={() => props.onClick(props.note)}>
			<div className="text">{props.note}</div>
		</li>
	)
}