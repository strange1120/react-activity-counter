import { PropTypes } from 'react'

export const AddDayForm = ({ gym, 
	date, 
	circuit, 
	lifting,
	onNewDay }) => {

let _gym, _date, _circuit, _lifting

const submit = (e) => {
	e.preventDefault()
	onNewDay({
		gym: _gym.value,
		date: _date.value,
		circuit: _circuit.checked,
		lifting: _lifting.checked
	})
	_gym.value = ''
	_date.value = ''
	_circuit.checked = false
	_lifting.checked = false

}

		return (
			<form onSubmit={submit} className="add-day-form">
				<label htmlFor="gym">Gym Name</label>
				<input id="gym" 
					   type="text" 
					   required 
					   defaultValue={gym}
					   ref={input => _gym= input}/>

				<label htmlFor="date">Date</label>
				<input id="date" 
					   type="date" 
					   required 
					   defaultValue={date}
					   ref={input => _date = input}/>

				<div>
					<input id="circuit" 
						   type="checkbox" 
						   defaultChecked={circuit}	
						   ref={input => _circuit = input}/>
					<label htmlFor="circuit">Circuit Day</label>
				</div>

				<div>	
					<input id="lifting" 
						   type="checkbox"
						   defaultChecked={lifting}
						   ref={input => _lifting = input}/>
					<label htmlFor="lifting">
						Lifting Day
					</label>
				</div>
				<button>Add Day</button>
			</form>
		)
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