import React from 'react'
import './HosApp.css'
import { Link } from 'react-router-dom'

const AddDoc = () => {
  return (
    <main className='adddoc'>
        <h1>Specializations</h1>
        <ul className='listitems'>
          <li className='item'><Link to="/hospital/adddoc/Brain">Brain</Link></li>
          <li className='item'><Link to="/hospital/adddoc/Heart">Heart</Link></li>
          <li className='item'><Link to="/hospital/adddoc/Cancer">Cancer</Link></li>
          <li className='item'><Link to="/hospital/adddoc/Lungs">Lungs</Link></li>
          <li className='item'><Link to="/hospital/adddoc/Kidney">Kidney</Link></li>
        </ul>
    </main>
  )
}

export default AddDoc
