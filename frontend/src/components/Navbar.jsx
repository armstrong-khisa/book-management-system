import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="site-header border-b border-neutral-900 bg-neutral-950/80 text-stone-200 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Brand/Logo */}
        <div className="font-serif text-xl font-medium tracking-tight text-stone-100">
          Book Management
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="nav-list flex items-center gap-8 text-sm font-medium tracking-wide">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-amber-500 ${isActive ? 'text-amber-600 font-semibold' : 'text-stone-400'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-amber-500 ${isActive ? 'text-amber-600 font-semibold' : 'text-stone-400'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/books" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-amber-500 ${isActive ? 'text-amber-600 font-semibold' : 'text-stone-400'}`
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-amber-500 ${isActive ? 'text-amber-600 font-semibold' : 'text-stone-400'}`
                }
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Navbar