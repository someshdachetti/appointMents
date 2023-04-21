// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {all, makeStar} = props
  const {id, TextInput, selectingDate, isFavorite} = all

  const favImg = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starImg = () => {
    makeStar(id)
  }

  return (
    <div className="appointment-cards">
      <div className="x">
        <h1>{TextInput}</h1>
        <img className="star-img" src={favImg} onClick={starImg} />
      </div>
      <p>Date: {selectingDate}</p>
    </div>
  )
}
export default AppointmentItem
