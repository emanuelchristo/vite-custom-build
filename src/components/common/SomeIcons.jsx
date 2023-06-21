import awardIcon from '/img/award.svg'
import bulbIcon from '/img/bulb.svg'
import readingIcon from '/img/reading.svg'
import schoolIcon from '/img/school.svg'
import studentIcon from '/img/student.svg'
import videoIcon from '/img/video.svg'

import styles from './SomeIcons.module.scss'

export default function SomeIcons() {
	return (
		<div className={styles['wrapper']}>
			<img src={awardIcon} className={styles['icon']} />
			<img src={bulbIcon} className={styles['icon']} />
			<img src={readingIcon} className={styles['icon']} />
			<img src={schoolIcon} className={styles['icon']} />
			<img src={studentIcon} className={styles['icon']} />
			<img src={videoIcon} className={styles['icon']} />
		</div>
	)
}
