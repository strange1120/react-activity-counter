import { Component } from 'react'
import { GymDayList } from './GymDayList'
import { GymDayCount } from './GymDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allGymDays: [
			{
                gym: "Equinox",
				date: new Date("1/2/2018"),
				circuit: true,
				lifting: false
			},
			{
				gym: "Crunch",
				date: new Date("1/3/2018"),
				circuit: true,
				lifting: true
			},
			{
				gym: "Blink",
				date: new Date("1/4/2018"),
				circuit: false,
                lifting: true
            }
		]
		}
	}
	countDays(filter) {
		const { allGymDays } = this.state
		return allGymDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}
	render() {
		return (
			<div className="app">
            <Menu />
			{(this.props.location.pathname === "/") ?
			  <GymDayCount total={this.countDays()}
							 circuit={this.countDays(
							 		"circuit"
							 	)}
							 lifting={this.countDays(
							 		"lifting"
							 	)}/> :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm /> :
			 	<GymDayList days={this.state.allGymDays}/>				 
			}
					
			</div>
		)
	}
}