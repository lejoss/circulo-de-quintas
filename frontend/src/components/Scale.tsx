import React from 'react';
type ScaleProps = {
	children: React.ReactNode,
	name: String
}
export default function Scale(props: ScaleProps) {
	return <div style={{ display: 'flex', gap: 30 }}>
		<p className="scale-text">{props.name}</p>	
		<p className="scale-text">{props.children}</p>
	</div>
}