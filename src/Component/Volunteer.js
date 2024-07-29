import React, { useState } from 'react';
import './Volunteer.css';
import axios from 'axios';

function Volunteer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleVolunteer = () => {
    axios.post('/api/volunteers', { name, email, phone })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="volunteer">
      <h1>Volunteer</h1>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button onClick={handleVolunteer}>Volunteer</button>
      </form>
    </div>
  );
}

export default Volunteer;