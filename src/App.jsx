import React from 'react'
import Home from './components/Home'
import PersonalDashboard from './components/PersonalDashboard'
import ProfessionalDashboard from './components/ProfessionalDashboard'
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import './App.css'

// ✅ Layout component (fixes white screen issue)
const Layout = () => {
  return (
    <div>
      <nav className='nav'>
        <Link to="/" id="nav-link">Home</Link>
        <Link to='/PersonalDashboard' id='nav-link'>PersonalDashboard</Link>
        <Link to='/ProfessionalDashboard' id='nav-link'>ProfessionalDashboard</Link>
      </nav>

      {/* This renders child routes */}
      <Outlet />
    </div>
  )
}

// ✅ Router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/PersonalDashboard',
        element: <PersonalDashboard />
      },
      {
        path: '/ProfessionalDashboard',
        element: <ProfessionalDashboard />
      }
    ]
  }
])

// ✅ Main App
const App = () => {
  return <RouterProvider router={router} />
}

export default App