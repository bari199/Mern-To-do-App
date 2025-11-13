import React , { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'; // Import BrowserRouter
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
      <App />
      <Toaster/>
    </BrowserRouter>
  </React.StrictMode>
)
