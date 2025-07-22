
import prisma from '../prisma';
import { Request, Response } from 'express';

// Get all clientes
export const getAllClientes = async (req: Request, res: Response) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get cliente by Id
export const getClienteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { IdCliente: id },
    });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Dynamic search for clientes
export const searchClientes = async (req: Request, res: Response) => {
  try {
    const {
      NombreC,
      Rnc,
      TelefonoC,
      DireccionC1,
      DireccionC2,
      IdVendedor,
      minBalance,
      maxBalance
    } = req.query;

    const where: any = {};
    if (NombreC) where.NombreC = { contains: NombreC };
    if (Rnc) where.Rnc = { contains: Rnc };
    if (TelefonoC) where.TelefonoC = { contains: TelefonoC };
    if (DireccionC1) where.DireccionC1 = { contains: DireccionC1 };
    if (DireccionC2) where.DireccionC2 = { contains: DireccionC2 };
    if (IdVendedor) where.IdVendedor = IdVendedor;
    if (minBalance || maxBalance) {
      where.BalanceC = {};
      if (minBalance) where.BalanceC.gte = parseFloat(minBalance as string);
      if (maxBalance) where.BalanceC.lte = parseFloat(maxBalance as string);
    }

    const clientes = await prisma.cliente.findMany({ where });
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create cliente
export const createCliente = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const newCliente = await prisma.cliente.create({ data });
    res.status(201).json(newCliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update cliente
export const updateCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await prisma.cliente.update({
      where: { IdCliente: id },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete cliente
// export const deleteCliente = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     await prisma.cliente.delete({
//       where: { IdCliente: id },
//     });
//     res.json({ message: 'Cliente eliminado' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
