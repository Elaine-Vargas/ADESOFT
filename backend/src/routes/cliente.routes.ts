import { Router } from 'express';
import {
  getAllClientes,
  getClienteById,
  searchClientes,
  createCliente,
  updateCliente,
  // deleteCliente
} from '../controllers/cliente.controller';

const router = Router();

// Get all clientes
router.get('/', getAllClientes);

// Get cliente by ID
router.get('/:id', getClienteById);

// Dynamic search
router.get('/search', searchClientes);

// Create cliente
router.post('/', createCliente);

// Update cliente
router.put('/:id', updateCliente);

// // Delete cliente
// router.delete('/:id', deleteCliente);

export default router;
