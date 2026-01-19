# Lab SBA Build a Product API

## Overview

In this assignment, we built a RESTful API using Node.js, Express, and Mongoose.  The API handles all CRUD operations including create, read, update, and delete.  It also included advanced filterin operations like filtering, sorting, and pagination.

## Features

Activity Tasks

Task 1: Project Setup

    1. Initialize Project: Create a new project directory, initialize it with npm, and install express, mongoose, and dotenv.
    2. Environment: Create a .env file to store your MONGO_URI connection string and a PORT for the server.
    3. Security: Create a .gitignore file and ensure node_modules/ and .env are listed.
    4. Project Structure: Your application must be well-structured with separate directories for your database connection logic, Mongoose models, and Express routes.
        - server.js (main entry point)
        - config/ (or db/) for connection.js
        - models/ for Product.js
        - routes/ for productRoutes.js

Task 2: Schema and Model

    1. In models/Product.js, define a productSchema with the following fields and validation rules:
        - name: String, required.
        - description: String, required.
        - price: Number, required, must be greater than 0.
        - category: String, required.
        - inStock: Boolean, defaults to true.
        - tags: An Array of Strings.
        - createdAt: Date, defaults to the current date and time.
    2. Compile this schema into a model named Product and export it.

Task 3: Database Connection

    1. In your config/connection.js file, establish a connection to your MongoDB Atlas database using Mongoose.
    2. Handle both successful connections and connection errors gracefully by logging appropriate messages to the console.
    3. Execute this connection logic from server.js.

Task 4: API Routes and Logic

In routes/productRoutes.js, use express.Router() to define your API endpoints. The logic for each route should be handled directly within the route file for this assessment.

Implement the following endpoints. All endpoints must handle potential errors with try...catch blocks and return appropriate status codes and JSON responses.

    1. POST /api/products (Create a Product)

        - Creates a new product based on the req.body.
        - Responds with the newly created product and a 201 status code.
        - If validation fails, it should return a 400 status code with a descriptive error message.

    2. GET /api/products/:id (Read a Single Product)

        - Retrieves a single product by its _id.
        - If the product is found, responds with the product object.
        - If no product is found, responds with a 404 status code.

    3. PUT /api/products/:id (Update a Product)

        - Updates a product by its _id with the data from req.body.
        - Responds with the updated product data (use the { new: true } option).
        - If no product is found to update, responds with a 404 status code.

    4. DELETE /api/products/:id (Delete a Product)

        - Deletes a product by its _id.
        - If successful, responds with a success message.
        - If no product is found to delete, responds with a 404 status code.

    5. GET /api/products (Read All Products with Advanced Querying)

        - This is the most complex endpoint. It should retrieve all products but also support the following optional query parameters:
            - category: Filter products by a specific category.
            - minPrice: Filter products with a price greater than or equal to this value.
            - maxPrice: Filter products with a price less than or equal to this value.
            - sortBy: Sort results. For example, price_asc for ascending price or price_desc for descending price.
            - page & limit: For pagination (defaulting to page 1, limit 10).
        - Dynamically build the Mongoose query based on which query parameters are provided.
        - Respond with an array of the resulting products.

## Tools

- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose

## Reflection Questions

This assignment was straightforward.  Most of the code was taken from lab 2 since they were similar.  The only code that needed to be added was for the filtering, sorting, and pagination.  I had some difficulty comparing the sort string to "price_desc".  In order to make it work, I had to add some extra code to make the boolean work correctly.  