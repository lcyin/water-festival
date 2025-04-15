// src/pages/AdminDashboard.js
import { useState } from 'react';

function AdminDashboard() {
  const [stats, setStats] = useState({
    normalSold: 120,
    vipSold: 80,
    totalRevenue: 10000,
  });

  const handleDownloadSalesData = () => {
    // Logic to download sales data
    alert('Downloading sales data...');
  };

  return (
    <div>
      <header className="header">
        <h1>Admin Dashboard</h1>
      </header>

      <section>
        <div className="stats">
          <div>
            <h3>Normal Sold: {stats.normalSold}/150</h3>
            <h3>Remaining: {150 - stats.normalSold}</h3>
          </div>
          <div>
            <h3>VIP Sold: {stats.vipSold}/50</h3>
            <h3>Remaining: {50 - stats.vipSold}</h3>
          </div>
          <div>
            <h3>Total Revenue: ${stats.totalRevenue}</h3>
          </div>
        </div>

        <button onClick={handleDownloadSalesData}>Download Sales Data (CSV)</button>
      </section>

      <footer>
        <p>Contact: support@summerwaterfest.com</p>
      </footer>
    </div>
  );
}

export default AdminDashboard;
