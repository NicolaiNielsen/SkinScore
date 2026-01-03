import express from 'express';
import { sayHi } from '../controllers/productController.js';

const router = express.Router();
// Define endpoint
router.get('/', sayHi);

export default router;
