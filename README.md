# Inventory Management API

This is a backend API for managing user authentication and product inventory. It is built using Node.js, Express, TypeScript, Sequelize, and MySQL.

## Features

- User Registration and Login with JWT authentication
- Product CRUD operations (Create, Read, Update, Delete)
- Filtering and Searching products by name and category
- Swagger UI for API documentation

## Prerequisites

Before begin, ensure have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [MySQL](https://dev.mysql.com/downloads/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/) (for interacting with the database)

## Installation

1. Clone the repository:
git clone https://github.com/your-username/inventory-management.git

2. Navigate to the project directory:
cd inventory-management

3. Install dependencies:
npm install

4. Configure the environment variables
Create a .env file in the root of the project and add the following variables:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=inventory_db
JWT_SECRET=secret_key

5. Set up the database
Create the database in MySQL:

CREATE DATABASE inventory_db;

6. Run Sequelize migrations to set up the required tables:
npx sequelize-cli db:migrate

7. Seed the database with sample data (optional):
npx sequelize-cli db:seed:all

8. Run the application
To start the application, run:
npm run dev
This will start the server and can be able to access the API at http://localhost:5000.
npm start
This will start the servervia dist and can able to access the API at http://localhost:5000.

9. API Documentation
Once the server is running, can access the Swagger UI at http://localhost:5000/api-docs to view the API documentation and interact with the endpoints.