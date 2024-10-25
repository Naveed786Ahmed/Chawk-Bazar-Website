import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <App />
  </ProductProvider>
)