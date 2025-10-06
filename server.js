const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Optional: Serve frontend files from "public" folder
app.use(express.static('public'));

// POST endpoint
app.post('/submit', (req, res) => {
  console.log('Form Data Received:', req.body);
  res.json({ message: 'Data received successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
