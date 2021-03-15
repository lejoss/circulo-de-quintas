import React from 'react';
type ScalePanelProps = {
	children: React.ReactNode
}
export default function ScalePanel(props: ScalePanelProps) {
	return <div className="scale-panel">{props.children}</div>
}