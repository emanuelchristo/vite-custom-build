interface Props {
	para: string
}

export default function Paragraph(props: Props) {
	return <p style={{ fontSize: '18px', color: '#333', fontWeight: 500 }}>{props.para}</p>
}
