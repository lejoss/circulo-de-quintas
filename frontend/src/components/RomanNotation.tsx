
export default function RomanNotation({ grades }: { grades: string[] }) {
	return (
		<div>
			{grades.map((grade, i) => <span>{grade}{i !== grades.length - 1 && '-'}</span>)}
		</div>
	)
}