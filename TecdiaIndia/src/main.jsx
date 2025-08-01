import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form.jsx'
import Product from './components/Product.jsx'
import TrackApp from './components/TrackApp.jsx'
import Contact from './components/Contact.jsx'
import ClickSpark from './components/ClickSpark.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/product" element={<Product />} />
        <Route path="/track" element={<TrackApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    </ClickSpark>
  </React.StrictMode>,
)
