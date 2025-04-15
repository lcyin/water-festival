// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout';
import PurchaseConfirmation from './pages/PurchaseConfirmation';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/purchase-confirmation" component={PurchaseConfirmation} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
