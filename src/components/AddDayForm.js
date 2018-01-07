import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	render() {

		const { gym, date, circuit, lifting } = this.props 

		return (
			<form className="add-day-form">

				<label htmlFor="gym">Gym Name</label>
				<input id="gym" 
					   type="text" 
					   required 
					   defaultValue={gym}/>

				<label htmlFor="date">Date</label>
				<input id="date" 
					   type="date" 
					   required 
					   defaultValue={date}/>

				<div>
					<input id="circuit" 
						   type="checkbox" 
						   defaultChecked={circuit}	/>
					<label htmlFor="circuit">Circuit Day</label>
				</div>

				<div>	
					<input id="lifting" 
						   type="checkbox"
						   defaultChecked={lifting} />
					<label htmlFor="lifting">
						Lifting Day
					</label>
				</div>
			</form>
		)
	}
}

AddDayForm.defaultProps = {
	gym: "Crunch",
	date: "2018-01-06",
	circuit: true,
	lifting: false
}


AddDayForm.propTypes = {
	gym: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	circuit: PropTypes.bool.isRequired,
	lifting: PropTypes.bool.isRequired
}