import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

function App() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [metric, setMetric] = useState('Log_Returns');

  useEffect(() => {
    axios.get('http://localhost:5000/api/prices')
      .then(res => {
        const formatted = res.data.map((item, i) => ({
          ...item,
          Date: new Date(item.Date).toISOString().slice(0, 10),
        }));

        // Compute cumulative returns
        let cumReturn = 0;
        const withCumulative = formatted.map((item, i) => {
          if (i === 0) return { ...item, Cumulative_Return: 0 };
          cumReturn += item.Log_Returns || 0;
          return { ...item, Cumulative_Return: cumReturn };
        });

        setPrices(withCumulative);
        setLoading(false);
      })
      .catch(err => {
        setError('API failed to load data.');
        setLoading(false);
      });
  }, []);

  const metrics = prices.map(p => p[metric]).filter(v => v != null);
  const mean = (metrics.reduce((a, b) => a + b, 0) / metrics.length)?.toFixed(4);
  const max = Math.max(...metrics).toFixed(4);
  const min = Math.min(...metrics).toFixed(4);
  const volatility = (Math.sqrt(metrics.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / metrics.length)).toFixed(4);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📊 Brent Oil Price Dashboard</h1>

      {loading && <p>⏳ Loading data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="metric">📈 Select Metric: </label>
            <select id="metric" value={metric} onChange={(e) => setMetric(e.target.value)}>
              <option value="Log_Returns">Log Returns</option>
              <option value="Price">Price</option>
              <option value="Cumulative_Return">Cumulative Return</option>
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>📦 Data points:</strong> {prices.length} <br />
            <strong>📉 Min:</strong> {min} | <strong>📈 Max:</strong> {max} | <strong>📊 Mean:</strong> {mean} | <strong>⚡ Volatility:</strong> {volatility}
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={prices}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" tick={{ fontSize: 10 }} />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey={metric} stroke="#8884d8" dot={false} />
            </LineChart>
          </ResponsiveContainer>

          {metric === 'Log_Returns' && (
            <div style={{ marginTop: '2rem' }}>
              <h3>📊 Histogram of Log Returns</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getHistogram(metrics, 20)}>
                  <XAxis dataKey="bin" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// 🔍 Helper: Build histogram buckets from data
function getHistogram(data, bins = 20) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const step = (max - min) / bins;
  const buckets = Array.from({ length: bins }, (_, i) => ({
    bin: `${(min + i * step).toFixed(2)}`,
    count: 0
  }));
  data.forEach(d => {
    const index = Math.min(Math.floor((d - min) / step), bins - 1);
    buckets[index].count += 1;
  });
  return buckets;
}

export default App;
