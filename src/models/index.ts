import sequelize from '../config/database';
import User from './user';
import Product from './product';

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Database connected and synced!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export { User, Product, connectDB };
