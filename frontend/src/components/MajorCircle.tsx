import React from 'react';
type MajorCircleProps = {
	children: React.ReactNode
}
export default function MajorCircle(props: MajorCircleProps) {
	return (
		<ul className="circle">
			{props.children}
		</ul>
	)
}