import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ErrorPage, Home } from './pages'
import './global/index.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
