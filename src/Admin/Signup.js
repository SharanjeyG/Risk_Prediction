import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminApp.css';

const Signup = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/hospitals/signup', { name: hospitalName, address, password });
      if (response.data.message === 'Hospital created successfully') {
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      alert('Error signing up');
    }
  };

  return (
    <main className='signup'>
      <form className='signform' onSubmit={handleSubmit}>
        <label htmlFor='name'>Hospital Name: </label>
        <input 
          className='entry'
          placeholder='Enter Name'
          id='name'
          type='text'
          required
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <label htmlFor='email'>Email: </label>
        <input 
          className='entry'
          type='email'
          placeholder='Enter Address'
          id='email'
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor='pass'>Password: </label>
        <input 
          className='entry'
          placeholder='Enter Password'
          id='pass'
          type='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor='cpass'>Confirm Password: </label>
        <input 
          className='entry'
          placeholder='Re-Enter Password'
          id='cpass'
          type='password'
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <button type='submit'>Add Me</button>
      </form>
    </main>
  );
};

export default Signup;
