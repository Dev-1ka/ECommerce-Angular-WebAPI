# E-Commerce Web Application

A full-stack E-Commerce Web Application developed using Angular for the frontend and ASP.NET Core Web API for the backend. The application provides product management, product browsing, shopping cart functionality, order processing, and analytics features.

## Features

### Authentication & Authorization
- JWT Authentication
- Role-Based Authorization
- Secure Login System

### Admin Module
- Create Products
- View Products
- Update Products
- Delete Products
- Product Management Dashboard

### User Module
- Browse Products
- Product Search
- Product Sorting
- Product Pagination
- Add to Cart
- Update Cart Quantity
- Remove Cart Items
- Place Orders
- View Order History

### Analytics
- Total Revenue
- Revenue by Date
- Top Selling Products
- Orders Per Day
- Daily, Weekly, and Monthly Sales Trends

## Technology Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core
- MediatR
- FluentValidation

### Database
- SQL Server

## Architecture

The backend follows Clean Architecture principles and implements:

- CQRS Pattern
- MediatR
- Repository Pattern
- Dependency Injection
- FluentValidation
- Entity Framework Core

## Project Structure

```text
ECommerce-WebApp/
│
├── Frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── Backend/
│   ├── API/
│   ├── Application/
│   ├── Domain/
│   ├── Infrastructure/
│   └── ...
│
└── README.md
```

## Key Functionalities

### Product Management
- Create Product
- Read Product
- Update Product
- Delete Product

### Product Listing
- Pagination
- Searching
- Sorting

### Cart Management
- Add to Cart
- Update Quantity
- Remove Products

### Order Management
- Place Orders
- View Orders

### Analytics Dashboard
- Revenue Tracking
- Sales Trends
- Top Selling Products

## Getting Started

### Backend Setup

1. Configure SQL Server connection string in `appsettings.json`
2. Apply migrations

```bash
dotnet ef database update
```

3. Run the API

```bash
dotnet run
```

### Frontend Setup

1. Navigate to Frontend folder

```bash
cd Frontend
```

2. Install dependencies

```bash
npm install
```

3. Run Angular application

```bash
ng serve
```

4. Open browser

```text
http://localhost:4200
```

## API Documentation

Swagger documentation is available after running the backend:

```text
https://localhost:<port>/swagger
```

## Future Enhancements

- Payment Gateway Integration
- Wishlist Functionality
- Product Reviews and Ratings
- Email Notifications
- Inventory Management
- Advanced Analytics Dashboard

