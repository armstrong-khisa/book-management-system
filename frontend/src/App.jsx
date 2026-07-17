import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import AdminDashbord from './pages/AdminDashbord'

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/admin" element={<AdminDashbord />} />
        </Routes>
      </main>
    </div>
  )
}

export default App