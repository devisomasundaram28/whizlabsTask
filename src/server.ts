import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import { connectDB } from './models';
import errorMiddleware from './middlewares/errorMiddleware';
import setupSwagger from './swagger'; // Import swagger setup

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Setup Swagger Docs
setupSwagger(app);

// Connect to Database and Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
