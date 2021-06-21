type ToneProps = {
	note: String;
	// onClick: (note: String) => void
}
export default function Tone(props: ToneProps) {
	function setTriad() {
		return console.log('tone', props.note)
	}
	return (
		<li onClick={setTriad}>
			<div className="text">{props.note}</div>
		</li>
	)
}
