
import prisma from '../prisma';
import { Request, Response } from 'express';

// Get all ordenes
export const getAllOrdenes = async (req: Request, res: Response) => {
  try {
    const ordenes = await prisma.orden.findMany({ include: { items: true, Cliente: true, Vendedor: true } });
    res.json(ordenes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get orden by Id
export const getOrdenById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orden = await prisma.orden.findUnique({
      where: { IdOrden: parseInt(id) },
      include: { items: true, Cliente: true, Vendedor: true }
    });
    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
    res.json(orden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Dynamic search for ordenes
export const searchOrdenes = async (req: Request, res: Response) => {
  try {
    const {
      Documento,
      IdCliente,
      IdVendedor,
      Estado,
      minTotal,
      maxTotal,
      Fecha
    } = req.query;

    const where: any = {};
    if (Documento) where.Documento = { contains: Documento };
    if (IdCliente) where.IdCliente = IdCliente;
    if (IdVendedor) where.IdVendedor = IdVendedor;
    if (Estado) where.Estado = Estado;
    if (Fecha) where.Fecha = new Date(Fecha as string);
    if (minTotal || maxTotal) {
      where.Total = {};
      if (minTotal) where.Total.gte = parseFloat(minTotal as string);
      if (maxTotal) where.Total.lte = parseFloat(maxTotal as string);
    }

    const ordenes = await prisma.orden.findMany({ where, include: { items: true, Cliente: true, Vendedor: true } });
    res.json(ordenes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create orden
export const createOrden = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const newOrden = await prisma.orden.create({ data });
    res.status(201).json(newOrden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update orden
export const updateOrden = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await prisma.orden.update({
      where: { IdOrden: parseInt(id) },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete orden
// export const deleteOrden = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     await prisma.orden.delete({
//       where: { IdOrden: parseInt(id) },
//     });
//     res.json({ message: 'Orden eliminada' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
