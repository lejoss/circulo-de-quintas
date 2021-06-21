import React from 'react';
type ScaleProps = {
	children: React.ReactNode,
}
export default function Scale(props: ScaleProps) {
	return <p className="scale-text">{props.children}</p>
}