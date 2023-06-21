import React from 'react'

import Story from './Story.jsx'
import hiName from '/utils/hiName.ts'
import { formatDate } from '/utils/formatDate.js'

export default function Canvas() {
	return (
		<div>
			<h1>Instagram Story</h1>
			<h3>{hiName()}</h3>
			<h3>Date: {formatDate(new Date())}</h3>
			<Story />
		</div>
	)
}
