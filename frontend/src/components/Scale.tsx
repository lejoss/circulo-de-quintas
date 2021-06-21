import React from 'react';
import Tone from './Tone'
type ScaleProps = {
	children: React.ReactNode,
	name: String
}
export default function Scale(props: ScaleProps) {
	function setTriad(note: String) {
		return console.log('note', note)
	}
	
	
	return <div style={{ display: 'flex', gap: 30 }}>
		{props.children && <p className="scale-text">{props.name}</p>}
		{/* <p className="scale-text">{props.children}</p> */}
		{React.Children.map(props.children, (note: any) => {
			return <Tone note={note} onClick={setTriad}/>
		})}
	</div>
}