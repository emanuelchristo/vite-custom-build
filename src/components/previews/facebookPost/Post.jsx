import hiName from '/utils/hiName.ts'

export default function Post({ name }) {
	return <h1>{hiName(name)}</h1>
}
