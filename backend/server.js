import express from 'express';
import productRoutes from './routes/productRoutes.js';
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware (optional for now)
app.use(express.json());
app.use(cors());
// Mount routes
app.use('/api/products', productRoutes);


// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});