import React from 'react'
import { render } from 'react-dom'
import { GymDayList } from './components/GymDayList'

window.React = React

render(
<GymDayList days={
		[
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
	}/>,
	document.getElementById('react-container')
)