import React from 'react'
import Note from './Note'
import { major, minor } from '../scales'

type ScaleProps = {
	children: React.ReactNode,
	type: String,
	grades: String[]
}

export default function Scale(props: ScaleProps) {
	const [triad, setTriad] = React.useState<String[] | null>(null)

	function createTriad(tone: String) {
		if (props.type && props.type === 'maj') {
			const [a, , b, , c] = major(tone)
			setTriad([a, '-', b, '-', c])

		} else if (props.type && props.type === 'min') {
			const [a, , b, , c] = minor(tone)
			setTriad([a, '-', b, '-', c])
		}
	}

	return <div style={{ display: 'flex', gap: 30 }}>
		{props.children && <p style={{ display: 'flex', alignItems: 'center' }} className="scale-text">{props.type}</p>}
		{React.Children.map(props.children, (note: any, i: number) => {
			console.log('i', i)
			return <Note note={note} onClick={createTriad} triad={triad} grade={props.grades[i]} />
		})}
	</div>
}