import React from 'react';
type MinorCircleProps = {
	children: React.ReactNode
}
export default function MinorCircle(props: MinorCircleProps) {
	return (
		<ul className="inner-circle">
			{props.children}
		</ul>
	)
}