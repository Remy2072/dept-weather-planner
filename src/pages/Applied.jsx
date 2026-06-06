import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Applied() {
  const { state } = useLocation()
  const email = state?.email || ''

  return (
    <>
      <div className="card-container">
        <div className="card">
          <h1 className="card-heading">You have successfully subscribed for the newsletter with</h1>
          <p className="card-description">{email}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
