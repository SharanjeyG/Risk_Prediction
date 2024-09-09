import React from 'react'
import { Link } from 'react-router-dom'


const HLPS = () => {
  return (
    <header className='hlps'>
        <div className='navbar'>
            <h1>Hl-PS</h1>
        </div>
        <div>
            <nav className='end'>
                <Link to="/login"><button>Log In</button></Link>
                <Link to="/signup"><button>Sign Up</button></Link>
            </nav>
        </div>
     </header>
  )
}

export default HLPS
