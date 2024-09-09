import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='doctor'>
        <div className='title'>
            <h1>Hospital Name</h1>
        </div>

        <div className='nav'>
            <nav>
                <ul className='items'>
                    <li><Link to="/patient">Symptom Model</Link></li>
                    <li><Link to="/patient/report">Report Data</Link></li>      
                </ul>
            </nav>
        </div>

        <div className='profile'>
            <img src="profile-pic.jpg" alt="Profile" className="profile-pic"/>
            <span className="profile-name">John Doe</span>
        </div>
    </header>
  )
}

export default Header
