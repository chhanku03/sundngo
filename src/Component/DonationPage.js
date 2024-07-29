import React, { useState } from 'react';
import './DonationPage.css';
import axios from 'axios';

function DonationPage() {
  const [amount, setAmount] = useState(0);

  const handleDonate = () => {
    axios.post('/api/donations', { amount })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="donation-page">
      <h1>Donation Page</h1>
      <form>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={handleDonate}>Donate</button>
      </form>
    </div>
  );
}

export default DonationPage;