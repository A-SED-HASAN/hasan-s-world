import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, ErrorPage, Wrapper, Legal, Contact, About } from './pages'
import './global/index.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Wrapper />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
