import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Applied from './pages/Applied'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/applied" element={<Applied />} />
    </Routes>
  )
}
