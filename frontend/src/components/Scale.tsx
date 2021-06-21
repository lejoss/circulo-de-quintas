import React from 'react'
import Note from './Note'
import { major, minor } from '../scales'

type ScaleProps = {
	children: React.ReactNode,
	name: String
}
export default function Scale(props: ScaleProps) {
	const [triad, setTriad] = React.useState<String[] | null>(null)
	
	function createTriad(tone: String) {
		if (props.name && props.name === 'maj') {
			const [a, , b, , c] = major(tone)
			setTriad([a, '-', b, '-', c])

		} else if (props.name && props.name === 'min') {
				const [a, , b, , c] = minor(tone)
				setTriad([a, '-', b, '-', c])
		}
	}

	return <div style={{ display: 'flex', gap: 30 }}>
		{props.children && <p className="scale-text">{props.name}</p>}
		{/* <p className="scale-text">{props.children}</p> */}
		{React.Children.map(props.children, (note: any) => {
			return <Note note={note} onClick={createTriad} triad={triad} />
		})}
	</div>
}