// src/pages/Homepage.js
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Homepage() {
  const [ticketType, setTicketType] = useState('Normal');
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const handleProceedToCheckout = () => {
    history.push('/checkout', { ticketType, quantity });
  };

  return (
    <div>
      <header className="header">
        <h1>Summer Water Festival</h1>
        <p>Date: August 8, 2025, 7 PM - 11 PM | Location: Central District</p>
      </header>

      <section className="ticket-selection">
        <label>
          Ticket Type:
          <select value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
            <option value="Normal">Normal ($30)</option>
            <option value="VIP">VIP ($50)</option>
          </select>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            max="10"
          />
        </label>
        <p>Availability: Normal (150 left), VIP (50 left)</p>
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </section>

      <footer>
        <p>Contact: support@summerwaterfest.com</p>
      </footer>
    </div>
  );
}

export default Homepage;
