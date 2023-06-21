interface Props {
	items: string[]
}

export const BulletList = (props: Props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li>{item}</li>
			))}
		</ul>
	)
}
