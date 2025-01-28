import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js'; // Corrected import statement

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', productRoutes);


console.log(process.env.MONGO_URI);

app.listen(3000 , () => {
    connectDB();
    console.log('Server is running at http://localhost:' + PORT);
});

