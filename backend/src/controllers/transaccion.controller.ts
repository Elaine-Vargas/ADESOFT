
import prisma from '../prisma';
import { Request, Response } from 'express';

// Get all transacciones
export const getAllTransacciones = async (req: Request, res: Response) => {
  try {
    const transacciones = await prisma.transaccion.findMany({ include: { Cliente: true, Vendedor: true, ReferenciaPago: true } });
    res.json(transacciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// Get transaccion by Id
export const getTransaccionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const transaccion = await prisma.transaccion.findUnique({
      where: { IdTransa: parseInt(id) },
      include: { Cliente: true, Vendedor: true, ReferenciaPago: true }
    });
    if (!transaccion) {
      return res.status(404).json({ message: 'Transaccion no encontrada' });
    }
    res.json(transaccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// Dynamic search for transacciones
export const searchTransacciones = async (req: Request, res: Response) => {
  try {
    const {
      Documento,
      IdCliente,
      IdVendedor,
      Tipo,
      Concepto,
      minValor,
      maxValor,
      Fecha
    } = req.query;

    const where: any = {};
    if (Documento) where.Documento = { contains: Documento };
    if (IdCliente) where.IdCliente = IdCliente;
    if (IdVendedor) where.IdVendedor = IdVendedor;
    if (Tipo) where.Tipo = Tipo;
    if (Concepto) where.Concepto = { contains: Concepto };
    if (Fecha) where.Fecha = new Date(Fecha as string);
    if (minValor || maxValor) {
      where.Valor = {};
      if (minValor) where.Valor.gte = parseFloat(minValor as string);
      if (maxValor) where.Valor.lte = parseFloat(maxValor as string);
    }

    const transacciones = await prisma.transaccion.findMany({ where, include: { Cliente: true, Vendedor: true, ReferenciaPago: true } });
    res.json(transacciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// Create transaccion
export const createTransaccion = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const newTransaccion = await prisma.transaccion.create({ data });
    res.status(201).json(newTransaccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// Update transaccion
export const updateTransaccion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await prisma.transaccion.update({
      where: { IdTransa: parseInt(id) },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
  }
};

// Delete transaccion 
// export const deleteTransaccion = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     await prisma.transaccion.delete({
//       where: { IdTransa: parseInt(id) },
//     });
//     res.json({ message: 'Transaccion eliminada' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'ERROR DEL SERVIDOR' });
//   }
// };
