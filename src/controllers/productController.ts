import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models';

// Create a Product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity, category } = req.body;
    const product = await Product.create({ name, price, quantity, category });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

// Get All Products with Search and Filtering by Name or Category
export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;

    const whereClause: any = {};

    if (category) {
      whereClause.category = category;
    }

    if (search) {
      whereClause.name = { [Op.like]: `%${search}%` };
    }

    const products = await Product.findAll({ where: whereClause });
    res.status(200).json(products);
    return;
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

// Update a Product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, quantity, category } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
       res.status(404).json({ error: 'Product not found' });
       return;
    }

    await product.update({ name, price, quantity, category });
    res.status(200).json(product);
    return;
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
    return;
  }
};

// Delete a Product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    await product.destroy();
    res.status(200).json({ message: 'Product deleted successfully' });
    return;
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
    return;
  }
};
