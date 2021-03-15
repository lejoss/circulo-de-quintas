import React from 'react';
type CircleOfFifhtsProps = {
	children: React.ReactNode	
}
export default function CircleOfFifhts(props: CircleOfFifhtsProps) {
	return <div className="circle-panel">{props.children}</div>
}