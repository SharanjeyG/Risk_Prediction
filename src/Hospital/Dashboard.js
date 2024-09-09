import React from 'react'
import Patients from './Patients'
import Doctors from './Doctors'
import { Link } from 'react-router-dom'
import './HosApp.css';

const Dashboard = ({ patSearchRes,patSearch, setpatSearch, docSearch, setdocSearch, docSearchRes}) => {
  return (
    <main className='dashboard'>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input
            className='search'
            type='text'
            placeholder='Search Doctors'
            value={docSearch}
            onChange={(e)=>setdocSearch(e.target.value)}
        />  
      </form>
      <Link to="/hospital/adddoc"><button>Add Doctor</button></Link>

      {docSearchRes.length?<Doctors 
        doctors={docSearchRes}
      />: <p>No Doctors</p>}

      <form onSubmit={(e)=>e.preventDefault()}>
        <input
            className='search'
            type='text'
            placeholder='Search Patients'
            value={patSearch}
            onChange={(e)=>setpatSearch(e.target.value)}
        />  
      </form>
      <Link to="/hospital/addpat"><button>Add Patient</button></Link>

      {patSearchRes.length ? <Patients 
        patients={patSearchRes}
      />: <p>No Patients</p>}
    </main>
  )
}

export default Dashboard
