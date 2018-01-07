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
				date: "1/2/2018",
				circuit: true,
				lifting: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
	}

	addDay(newDay) {
		this.setState({
			allGymDays: [
				...this.state.allGymDays,
				newDay
			]
		})
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
			 	<AddDayForm onNewDay={this.addDay}/> :
			 	<GymDayList days={this.state.allGymDays}
                 filter={this.props.params.filter}/>				 
}
        
</div>
)
}
}
