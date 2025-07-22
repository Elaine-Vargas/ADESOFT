import { Router } from 'express';
import {
  getAllTransacciones,
  getTransaccionById,
  searchTransacciones,
  createTransaccion,
  updateTransaccion,
  // deleteTransaccion
} from '../controllers/transaccion.controller';

const router = Router();

// Get all transacciones
router.get('/', getAllTransacciones);

// Get transaccion by ID
router.get('/:id', getTransaccionById);

// Dynamic search
router.get('/search', searchTransacciones);

// Create transaccion
router.post('/', createTransaccion);

// Update transaccion
router.put('/:id', updateTransaccion);

// router.delete('/:id', deleteTransaccion);

export default router;
