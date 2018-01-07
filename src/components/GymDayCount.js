import React from 'react'
import '../stylesheets/ui.scss'

export const GymDayCount = React.createClass({
    percentToDecimal(decimal){
        return ((decimal * 100) + '%')
    },
    calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	},
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
                <span>
						{this.calcGoalProgress(
							this.props.total, 
							this.props.goal
						)}
					</span>
                    </div>
			</div>
		)
	}
})