const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.json({ message: 'E-commerce API is running...' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

// // After all routes, before app.listen
// const createSampleData = async () => {
//   try {
//     const Product = require('./models/Product');
//     const productCount = await Product.countDocuments();
    
//     if (productCount === 0) {
//       const sampleProducts = [
//         {
//           name: "Wireless Bluetooth Headphones",
//           description: "High-quality wireless headphones with noise cancellation",
//           price: 99.99,
//           category: "electronics",
//           brand: "AudioTech",
//           countInStock: 10,
//           image: "/uploads/sample-headphones.jpg"
//         },
//         {
//           name: "Smart Fitness Watch",
//           description: "Track your fitness and receive notifications",
//           price: 199.99,
//           category: "electronics", 
//           brand: "FitGear",
//           countInStock: 15,
//           image: "/uploads/sample-watch.jpg"
//         }
//       ];
      
//       await Product.insertMany(sampleProducts);
//       console.log('Sample products created');
//     }
//   } catch (error) {
//     console.log('Error creating sample data:', error.message);
//   }
// };

// // Call this after database connection
// mongoose.connection.once('open', () => {
//   createSampleData();
// });

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});


/*
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const path = require('path');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

app.get('/', (req, res) => {
  res.json({ message: 'E-commerce API is running...' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
*/