import React from 'react'
import '../stylesheets/ui.scss'

export const GymDayCount = React.createClass({
	render() {
		return (
			<div className="gym-day-count">
				<div className="total-days">
                    <span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="circuit-days">
                <span>{this.props.circuit}</span>
					<span>days</span>
				</div>
				<div className="lifting-days">
                <span>{this.props.lifting}</span>
					<span>days</span>
				</div>
                <div>
                    <span>{this.props.goal}</span>
                    </div>
			</div>
		)
	}
})