# E-Commerce Store

A production-ready full-stack e-commerce application built with the MERN stack and deployed on AWS cloud infrastructure. Features complete user authentication, product management, shopping cart, order processing, and secure payment integration with automated AWS deployment.


### AWS Services Implemented
- **Elastic Beanstalk**: Automated deployment and scaling of Node.js backend
- **S3 Buckets**: Static frontend hosting and product image storage
- **CloudFront CDN**: Global content delivery and caching
- **IAM Roles**: Secure access management for AWS resources
- **CloudWatch**: Application monitoring and logging
- **Route 53**: DNS management (optional)

## Tech Stack & AWS Integration

### Frontend (Deployed on AWS S3 + CloudFront)
- **React.js** with React Router for SPA
- **Axios** for API communication with EB backend
- **React Toastify** for notifications
- **Tailwind CSS** for responsive design
- **AWS S3** for static hosting
- **AWS CloudFront** for CDN distribution

### Backend (Deployed on AWS Elastic Beanstalk)
- **Node.js** with Express.js framework
- **MongoDB Atlas** cloud database
- **JWT** for authentication
- **bcryptjs** for password encryption
- **Multer + AWS SDK** for S3 file uploads
- **Stripe API** for payment processing
- **CORS** for cross-origin requests

### AWS Infrastructure
- **Elastic Beanstalk**: Auto-scaling backend environment
- **S3 Buckets**: Frontend hosting and file storage
- **CloudFront**: Global CDN with SSL
- **IAM Policies**: Secure resource access
- **Environment Configuration**: Secure credential management


## Features

- **User Authentication** - JWT-based login/register
- **Product Management** - CRUD operations for products
- **Shopping Cart** - Add/remove items, quantity management
- **Order System** - Complete order placement and tracking
- **Admin Dashboard** - Manage products, orders, and users
- **File Upload** - Product images with AWS S3
- **Payment Integration** - Stripe payment processing
- **Responsive Design** - Mobile-friendly interface

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- React Toastify
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Multer for file uploads
- Stripe for payments

### Deployment
- AWS Elastic Beanstalk (Backend)
- AWS S3 + CloudFront (Frontend)
- MongoDB Atlas (Database)

##  Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Stripe account for payments

### Backend Setup

cd backend
npm install
cp .env.example .env
# Configure your environment variables
npm run dev

### Frontend Setup

cd frontend
npm install
npm start

### Production Deployment
AWS Deployment Steps

1. Backend: Deploy to Elastic Beanstalk

2. Frontend: Build and upload to S3 + CloudFront

3. Database: Use MongoDB Atlas

## 1. Backend to Elastic Beanstalk
cd backend

# Initialize EB environment
eb init

# Create and deploy
eb create ecommerce-production
eb deploy

## 2. Frontend to S3 + CloudFront
cd frontend
npm run build

# Upload build/ to S3 bucket
aws s3 sync build/ s3://your-bucket-name --delete

# Create CloudFront distribution
# Configure S3 bucket as origin

## 3. Database Configuration

Use MongoDB Atlas production cluster
Configure IP whitelisting
Set up database users

### Environment Variables
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
S3_BUCKET_NAME=your_s3_bucket_name


### Manual Deployment
# Build frontend
cd frontend
npm run build

# Deploy backend
cd backend
npm start

### AWS Infrastructure Details

# Elastic Beanstalk Configuration

1. Platform: Node.js 18

2. Environment Type: Load balanced

3. Instance Type: t3.micro/t3.small

4. Health Checks: Enabled

5. Auto Scaling: 2-8 instances

# S3 Bucket Configuration

1. Frontend Bucket: Static website hosting enabled

2. Media Bucket: Product image storage

3. CORS Configuration: Enabled for CloudFront

4. Bucket Policies: Public read access for frontend

# CloudFront Distribution

1. Origin: S3 bucket

2. Behaviors: Cache optimization

3. SSL Certificate: AWS Certificate Manager

4. Price Class: Global distribution

### Security Implementation

# AWS Security

1. IAM roles with least privilege

2. S3 bucket policies

3. Environment variable encryption

4. SSL/TLS encryption everywhere

5. Database IP whitelisting

# Application Security

1. JWT token expiration

2. Password hashing with bcrypt

3. Input validation and sanitization

4. CORS configuration

5. XSS protection

### Monitoring & Logging

# AWS CloudWatch

1. Application logs

2. Performance metrics

3. Error tracking

4. Custom alarms

# Application Monitoring

1. Request/response logging

2. Error tracking and reporting

3. Performance monitoring

4. User activity analytics

### CI/CD Pipeline

# Automated Deployment

# .github/workflows/deploy.yml
name: Deploy to AWS
on:
  push:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: aws-actions/configure-aws-credentials@v1
      - run: cd backend && eb deploy
      
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: cd frontend && npm install && npm run build
      - uses: aws-actions/configure-aws-credentials@v1
      - run: aws s3 sync frontend/build/ s3://${{ secrets.S3_BUCKET }} --delete
      

### Usage

1. Register/Login - Create an account or login

2. Browse Products - View products by category

3. Add to Cart - Select products and quantities

4. Checkout - Complete order with Stripe payment

5. Order Tracking - View order history and status

### Admin Features

1. Add/edit/delete products

2. Manage user accounts

3. Process orders

4. View sales analytics

### Contributing

1. Fork the project

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

### License

This project is licensed under the MIT License.

### Author

Akshay BM - https://github.com/Akshay6899

### Acknowledgments

React community, MongoDB Atlas. Stripe for payment processing, AWS for cloud services

