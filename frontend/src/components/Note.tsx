import React from 'react'
type NoteProps = {
	note: String;
	onClick: (note: String) => void;
	triad: String[] | null
}
export default function Note(props: NoteProps) {
	return (
		<div onClick={() => props.onClick(props.note)}>
			<p className="scale-text">{props.note}</p>
			{props.triad && props.triad[0] === props.note ? <div style={{ fontSize: '3rem'}}>{props.triad}</div> : null}
		</div>
	)
}
