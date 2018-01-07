import Rowing from 'react-icons/lib/md/rowing'
import Chain from 'react-icons/lib/fa/chain'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'


export const GymDayRow = ({gym, date, 
    circuit, lifting}) => (
<tr>
<td>
{date.getMonth()+1}/{date.getDate()}/
{date.getFullYear()}
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
	date: PropTypes.instanceOf(Date).isRequired,
	circuit: PropTypes.bool,
    lifting: PropTypes.bool
}