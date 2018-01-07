import React from 'react'
import { render } from 'react-dom'
import { GymDayCount } from './components/GymDayCount'

window.React = React

render(
<GymDayCount/>,
	document.getElementById('react-container')
)