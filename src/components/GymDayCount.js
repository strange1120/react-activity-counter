import React from 'react'
import '../stylesheets/ui.scss'

export const GymDayCount = React.createClass({
	render() {
		return (
			<div className="gym-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div>
				<div className="circuit-days">
					<span>2 days</span>
				</div>
				<div className="lifting-days">
					<span>1 lifting day</span>
				</div>
			</div>
		)
	}
})