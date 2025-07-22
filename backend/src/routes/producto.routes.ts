import { Router } from 'express';
import {
  getAllProductos,
  getProductoById,
  searchProductos,
  // createProducto,
  updateProducto,
  // deleteProducto
} from '../controllers/producto.controller';

const router = Router();

// Get all products
router.get('/', getAllProductos);

// Get product by ID
router.get('/:id', getProductoById);

// Dynamic search
router.get('/search', searchProductos);

// router.post('/', createProducto);
router.put('/:id', updateProducto);
// router.delete('/:id', deleteProducto);

export default router;
