import React from 'react'
import { Link } from 'react-router-dom'

const LoginOther = ({user}) => {
  return (
    <form className="otheruser">
        <label htmlFor="name">{user} Name: </label>
        <input className='entry' id="name" type="text" placeholder='Enter Your Name' required />
        <br></br>
        <label htmlFor="pass">Password: </label>
        <input className='entry' id="pass" type="password" placeholder='Enter Password' required />

        <Link to={`/${user}`}><button type="submit">Login</button></Link>
    </form>
  )
}

export default LoginOther
