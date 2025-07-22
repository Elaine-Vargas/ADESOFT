import prisma from '../prisma';
import { Request, Response } from 'express';

// Get all vendedores
export const getAllVendedores = async (req: Request, res: Response) => {
  try {
    const vendedores = await prisma.vendedor.findMany();
    res.json(vendedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// Get vendedor by Id
export const getVendedorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const vendedor = await prisma.vendedor.findUnique({
      where: { IdVendedor: id },
    });
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    res.json(vendedor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// // Create vendedor
// export const createVendedor = async (req: Request, res: Response) => {
//   const data = req.body;
//   try {
//     const newVendedor = await prisma.vendedor.create({ data });
//     res.status(201).json(newVendedor);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
//   }
// };

// Update vendedor
export const updateVendedor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await prisma.vendedor.update({
      where: { IdVendedor: id },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// // Delete vendedor
// export const deleteVendedor = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     await prisma.vendedor.delete({
//       where: { IdVendedor: id },
//     });
//     res.json({ message: 'Vendedor eliminado' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
//   }
// };
