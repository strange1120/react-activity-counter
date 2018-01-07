import '../stylesheets/ui.scss'
import Rowing from 'react-icons/lib/md/rowing'
import Chain from 'react-icons/lib/fa/chain'
import Calendar from 'react-icons/lib/fa/calendar'


const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const GymDayCount = ({total, circuit, lifting, goal}) => (
    <div className="gym-day-count">
			<div className="total-days">
				<span>{total}</span>
                <Calendar />
				<span>days</span>
			</div>
			<div className="circuit-days">
				<span>{circuit}</span>
                <Rowing />
				<span>days</span>
			</div>
			<div className="lifting-days">
				<span>{lifting}</span>
                <Chain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
		)
