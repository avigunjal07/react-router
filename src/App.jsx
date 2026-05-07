import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import PersonalDashboard from './components/PersonalDashboard.jsx'
import ProfessionalDashboard from './components/ProfessionalDashboard.jsx'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>

      <nav className='nav'>
        <Link to="/" id="nav-link">Home</Link>

        <Link to="/PersonalDashboard" id="nav-link">
          PersonalDashboard
        </Link>

        <Link to="/ProfessionalDashboard" id="nav-link">
          ProfessionalDashboard
        </Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/PersonalDashboard"
          element={<PersonalDashboard />}
        />

        <Route
          path="/ProfessionalDashboard"
          element={<ProfessionalDashboard />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App