import { useNavigate } from 'react-router-dom'

export default function Forecast({ forecast }) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const email = event.target.email.value
    navigate('/applied', { state: { email } })
  }

  return (
    <section data-scroll-theme="" className="area-2 hidden">
      <div className="content-wrapper">
        <ul className="ul-container hidden">
          <li>
            <h2 className="heading-forecast">Upcoming 5 days</h2>
          </li>
          {forecast.map((item, index) => (
            <div key={index} className="forecast-info-border">
              <li className="forecast-info hidden">
                <p className="forecast-datum">{item.dayOfWeek}</p>
                <ul className="forecast-ul">
                  <li className="temp">{item.minTemp}° / {item.maxTemp}°</li>
                  <li className="water">{item.precipitation}mm</li>
                  <li className="wind">{item.windDirection}</li>
                </ul>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="forecast-border hidden">
        <div className="content-wrapper">
          <h2 className="heading-forecast2">Want to get a daily forecast?</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" aria-label="email-form">
              <input
                className="submit-text hidden"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your e-mailaddress"
                required
              />
            </label>
            <button className="submit-button hidden" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
