import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvaider } from "./context/DataContext.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvaider>
    <App />
    </DataProvaider>
  </React.StrictMode>,
)
