/* 
DEPENDENCY TYPES
- module.scss
- js
- jpeg
*/

import './facebook.module.scss'
import Post from './Post.jsx'
import SomeIcons from '/components/common/SomeIcons.jsx'
import devicesImage from '/img/devices.jpeg'

export default function Canvas() {
	return (
		<div>
			<img src={devicesImage} />
			<div className='facebook-logo-bg'></div>
			<SomeIcons />
			<Post name={'Tony Stark'} />
		</div>
	)
}
