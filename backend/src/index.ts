import express from 'express';
import productoRoutes from './routes/producto.routes';

const app = express();
app.use(express.json());

app.use('/api/productos', productoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
//   // Mostrar la lista de productos al iniciar
//   import('./controllers/producto.controller').then(async (mod) => {
//     try {
//       const productos = await mod.getAllProductosDirect();
//       console.log('Productos:', productos);
//     } catch (e) {
//       console.error('Error fetching productos:', e);
//     }
//   });
});
