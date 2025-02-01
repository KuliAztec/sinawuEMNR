import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Update this to match your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/api', productRoutes);  // Update product routes path

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running at http://localhost:' + PORT);
});
