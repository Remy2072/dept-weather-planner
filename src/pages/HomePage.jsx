import { useState, useEffect } from 'react'
import { fetchJson } from '../utils/fetchJson'
import { processWeather, formatForecast } from '../utils/weatherUtils'
import { dummyWeather, dummyForecast, dummyActivities } from '../data/dummy'
import Introduction from '../components/Introduction'
import Forecast from '../components/Forecast'
import Activities from '../components/Activities'
import Footer from '../components/Footer'
import useScrollTheme from '../hooks/useScrollTheme'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const API = 'https://dtnl-frontend-case.vercel.app/api'

export default function HomePage() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useScrollTheme()
  useIntersectionObserver([loading])

  useEffect(() => {
    async function fetchData() {
      try {
        const [weatherData, forecastData, activitiesData] = await Promise.all([
          fetchJson(`${API}/get-weather`),
          fetchJson(`${API}/get-forecast`),
          fetchJson(`${API}/get-things-to-do`),
        ])

        setWeather(processWeather(weatherData))
        setForecast(Array.isArray(forecastData.forecast) ? formatForecast(forecastData.forecast) : [])
        setActivities(activitiesData.activities || [])
      } catch {
        setWeather(processWeather(dummyWeather))
        setForecast(formatForecast(dummyForecast.forecast))
        setActivities(dummyActivities.activities)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="card-container">
        <p>Weerdata laden…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card-container">
        <div className="card">
          <h1 className="card-heading">Er ging iets mis</h1>
          <p className="card-description">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <main className="container">
      <Introduction />
      <Forecast forecast={forecast} />
      <Activities weather={weather} activities={activities} />
      <Footer />
    </main>
  )
}
