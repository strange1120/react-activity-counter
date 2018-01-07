import Rowing from 'react-icons/lib/md/rowing'
import Chain from 'react-icons/lib/fa/chain'
import Calendar from 'react-icons/lib/fa/calendar'
import { GymDayRow } from './GymDayRow'

export const GymDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Gym</th>
				<th>Circuit</th>
				<th>Lifting</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
				<GymDayRow key={i}
						   {...day}/>	
				)}
		</tbody>

	</table>
)