import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoaderKatakana from './LoaderKatakana.jsx';
import App from '../App.jsx';
import Form from './Form.jsx';
import Product from './Product.jsx';
import TrackApp from './TrackApp.jsx';
import Contact from './Contact.jsx';
import AdminLogin from './AdminLogin.jsx';
import AdminDashboard from './AdminDashboard.jsx';

const AppWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Show loader on route change
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div style={{ position: 'fixed', zIndex: 9999 }}>
          <LoaderKatakana />
        </div>
      )}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />} />
          <Route path="/product" element={<Product />} />
          <Route path="/track" element={<TrackApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default AppWithLoader;