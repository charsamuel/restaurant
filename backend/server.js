import express from 'express';
import cors from 'cors';
import { dbConnection } from './database/dbConnection.js'; // Update the path accordingly
import send_reservation from './controller/reservation.js'; // Adjust the path if needed

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors({
  origin: 'http://localhost:5174', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  credentials: true, 
}));


app.use(express.json()); 


dbConnection();


app.post('/api/v1/reservation/send', send_reservation);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
