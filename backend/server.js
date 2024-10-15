import express from 'express';
import cors from 'cors';
import { dbConnection } from './database/dbConnection.js';
import send_reservation from './controller/reservation.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000; // Change to 4000 to avoid conflict with Vite

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  credentials: true, 
}));

app.use(express.json());

// Connect to the database
dbConnection();

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// API endpoint for sending reservations
app.post('/api/v1/reservation/send', send_reservation);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Route for root to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

// Wildcard route for SPAs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message,
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
