import { majorGrades } from "../scales"

type NoteProps = {
	note: String;
	onClick: (note: String) => void;
	triad: String[] | null,
	grade: String
}
export default function Note(props: NoteProps) {
	const char = props.grade.charAt(0)
	return (
		<div onClick={() => props.onClick(props.note)}>
			<p className="grade-text">{props.grade}</p>
			<p className="scale-text">{char === char.toUpperCase() ? `${props.note}m` : props.note}</p>
			{props.triad && props.triad[0] === props.note ? <div style={{ fontSize: '4rem', color: 'gray' }}>{props.triad}</div> : null}
		</div>
	)
}
