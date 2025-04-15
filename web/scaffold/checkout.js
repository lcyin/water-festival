// src/pages/Checkout.js
import { useLocation } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Checkout() {
  const { ticketType, quantity } = useLocation().state;
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    // Stripe Payment logic here
    alert('Payment Successful');
  };

  return (
    <div>
      <header className="header">
        <h1>Checkout</h1>
      </header>

      <section>
        <h2>Order Summary</h2>
        <p>Ticket: {ticketType} | Quantity: {quantity} | Total: ${ticketType === 'VIP' ? quantity * 50 : quantity * 30}</p>

        <h2>Payment</h2>
        <form onSubmit={handlePayment}>
          <input type="email" placeholder="Email" required />
          <CardElement />
          <button type="submit" disabled={!stripe}>Pay Now</button>
        </form>
      </section>

      <footer>
        <p>Contact: support@summerwaterfest.com</p>
      </footer>
    </div>
  );
}

export default Checkout;
