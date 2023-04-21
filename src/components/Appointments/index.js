import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInput: '',
      selectingDate: '',
      AddtoAppointment: [],
      showItIsfav: false,
    }
  }

  onText = event => {
    const {TextInput} = this.state
    this.setState({TextInput: event.target.value})
  }

  onDate = event => {
    const {onDate} = this.state
    this.setState({selectingDate: event.target.value})
  }

  AddingtoAppointment = event => {
    event.preventDefault()
    const {TextInput, selectingDate} = this.state
    const x = {
      id: uuidv4(),
      TextInput,
      selectingDate,
      isFavorite: false,
    }
    this.setState(prevState => ({
      AddtoAppointment: [...prevState.AddtoAppointment, x],
      TextInput: '',
      selectingDate: '',
    }))
  }

  makeStar = id => {
    this.setState(prevState => ({
      AddtoAppointment: prevState.AddtoAppointment.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  render() {
    const {TextInput, selectingDate, AddtoAppointment, showItIsfav} = this.state
    console.log(selectingDate)
    console.log(TextInput)

    return (
      <div className="bgColor">
        <div className="white-card">
          <div className="appointment-details">
            <form onSubmit={this.AddingtoAppointment}>
              <h1>Add Appointment</h1>
              <br />
              <label htmlFor="input">title</label>
              <br />
              <input id="input" type="text" onChange={this.onText} />
              <br />
              <label htmlFor="dates">Date</label>
              <br />
              <input id="dates" type="date" onChange={this.onDate} />

              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
              <button type="submit">Add</button>
              <hr />
              <div className="favAppointments">
                <h1>Appointments</h1>
                <button
                  data-testid="star"
                  type="button"
                  className="b"
                  onClick={() =>
                    this.setState(prevState => ({
                      showItIsfav: !prevState.showItIsfav,
                    }))
                  }
                >
                  Starred
                </button>
              </div>
              <div className="Appointment-list">
                {AddtoAppointment.filter(
                  each => !showItIsfav || each.isFavorite,
                ).map(each => (
                  <AppointmentItem
                    key={each.TextInput}
                    all={each}
                    makeStar={() => this.makeStar(each.id)}
                  />
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
