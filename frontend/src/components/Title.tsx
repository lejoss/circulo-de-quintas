import React from 'react';
type TitleProps = {
	children: React.ReactNode,
}
export default function Scale(props: TitleProps) {
	return <p className="scale-title">{props.children}</p>
}