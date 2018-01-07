import Rowing from 'react-icons/lib/md/rowing'
import Chain from 'react-icons/lib/fa/chain'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const GymDayRow = ({gym, date, 
							circuit, lifting}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{gym}
		</td>
		<td>
			{(circuit) ? <Rowing/> : null}
		</td>
		<td>
			{(lifting) ? <Chain /> : null}
		</td>
	</tr>						

)

GymDayRow.propTypes = {
	gym: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	circuit: PropTypes.bool,
	lifting: PropTypes.bool
}


