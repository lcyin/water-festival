// src/pages/PurchaseConfirmation.js
import { useHistory } from 'react-router-dom';

function PurchaseConfirmation() {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <div>
      <header className="header">
        <h1>Purchase Successful!</h1>
      </header>

      <section>
        <p>Thank you for your purchase. Your ticket has been sent to your email.</p>
        <p>Present the QR code in your email at the event.</p>
        <button onClick={handleBackToHome}>Back to Home</button>
      </section>

      <footer>
        <p>Contact: support@summerwaterfest.com</p>
      </footer>
    </div>
  );
}

export default PurchaseConfirmation;
