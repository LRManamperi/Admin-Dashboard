// Dashboard.jsx
import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import DynamicChart from './dynamicChart';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUserData(data));

    // Fetch chart data
    fetch('/api/charts')
      .then(response => response.json())
      .then(data => setChartData(data));
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              User Data
            </Typography>
            <ul>
              {userData.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <DynamicChart data={chartData} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
