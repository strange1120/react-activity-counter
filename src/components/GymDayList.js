import Rowing from 'react-icons/lib/md/rowing'
import Chain from 'react-icons/lib/fa/chain'
import Calendar from 'react-icons/lib/fa/calendar'
import { GymDayRow } from './GymDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'


export const GymDayList = ({days, filter}) => {
    const filteredDays = (!filter || 
            !filter.match(/circuit|lifting/))?
            days:
            days.filter(day => day[filter])
  
    return (
        <div className="gym-day-list">
      <table>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Gym</th>
                  <th>Circuit</th>
                  <th>Lifting</th>
              </tr>
              <tr>
                  <td colSpan={4}>
                      <Link to="/list-days">
                          All Days
                      </Link>
                      <Link to="/list-days/circuit">
                          Circuit Days
                      </Link>
                      <Link to="/list-days/lifting">
                          Lifting Days
                      </Link>
                  </td>
              </tr>
          </thead>
          <tbody>
              {filteredDays.map((day, i) =>
                  <GymDayRow key={i}
                             {...day}/>	
                  )}
          </tbody>
  
      </table>
      </div>
  )
  }  
  
  GymDayList.propTypes = {
      days: function(props) {
          if(!Array.isArray(props.days)) {
              return new Error(
                  "GymDayList should be an array"	
                  )
          } else if(!props.days.length) {
              return new Error(
                  "GymDayList must have at least one record"
                  )
          } else {
              return null
          }
      }
  }