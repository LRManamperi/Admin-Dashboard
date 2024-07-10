const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Use this to enable CORS

// Sample data for /api/summary endpoint
const summaryData = {
  products: 300,
  categories: 12,
  customers: 33,
  alerts: 42
};

// Sample data for /api/chart-data endpoint
const chartData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

// Endpoint to serve summary data
app.get('/api/summary', (req, res) => {
  res.json(summaryData);
});

// Endpoint to serve chart data
app.get('/api/chart-data', (req, res) => {
  res.json(chartData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
