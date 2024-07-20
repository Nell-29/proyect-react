import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ClassProvider } from './context/ClassContext'
import App from './App'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <ClassProvider>
      <App />
      </ClassProvider>
    </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);
