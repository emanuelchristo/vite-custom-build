/* 
DEPENDENCY TYPES
- scss
- png
- svg
- jsx
- js
*/

import './facebookAd.scss'
import facebookLogo from '/img/facebook_logo.png'
import '/img/react.svg'
import Button from '/components/common/Button.jsx'
import SomeIcons from '/components/common/SomeIcons'
import Ad from './Ad.jsx'

export default function Canvas() {
	return (
		<div classname='container'>
			<h1>Facebook Ad</h1>
			<p>This is facebook ad preview</p>
			<img src={facebookLogo} />
			<div className='meta'></div>
			<Button />
			<SomeIcons />
			<Ad />
		</div>
	)
}
