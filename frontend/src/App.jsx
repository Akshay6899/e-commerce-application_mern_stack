import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import PrivateRoute from './components/privateRoute';
import AdminRoute from './components/adminRoute';

// Pages
import Home from './pages/home';
import ProductList from './pages/productList';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Checkout from './pages/checkout';
import Order from './pages/order';
import OrderSuccess from './pages/orderSuccess';
import AdminDashboard from './pages/adminDashboard';
import AdminProducts from './pages/adminProducts';
import AdminOrders from './pages/adminOrders';
import AdminUsers from './pages/adminUsers';
import AddProduct from './pages/addProduct';
import EditProduct from './pages/editProduct';
import ShippingPolicy from './pages/shippingPolicy';
import ReturnsPolicy from './pages/returnsPolicy';
import Contact from './pages/contact';
import About from './pages/about';
import NotFound from './pages/notFound';

// Context
import { CartProvider } from './context/cartContext';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shipping" element={<ShippingPolicy />} />
                <Route path="/returns" element={<ReturnsPolicy />} />
                
                {/* Protected Routes */}
                <Route path="/profile" element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                } />
                <Route path="/checkout" element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                } />
                <Route path="/order/:id" element={
                  <PrivateRoute>
                    <Order />
                  </PrivateRoute>
                } />
                <Route path="/order-success/:id" element={
                  <PrivateRoute>
                    <OrderSuccess />
                  </PrivateRoute>
                } />
                
                {/* Admin Routes */}
                <Route path="/admin" element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } />
                <Route path="/admin/products" element={
                  <AdminRoute>
                    <AdminProducts />
                  </AdminRoute>
                } />
                <Route path="/admin/orders" element={
                  <AdminRoute>
                    <AdminOrders />
                  </AdminRoute>
                } />
                <Route path="/admin/users" element={
                  <AdminRoute>
                    <AdminUsers />
                  </AdminRoute>
                } />
                <Route path="/admin/add-product" element={
                  <AdminRoute>
                    <AddProduct />
                  </AdminRoute>
                } />
                <Route path="/admin/edit-product/:id" element={
                  <AdminRoute>
                    <EditProduct />
                  </AdminRoute>
                } />
                
                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer 
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;