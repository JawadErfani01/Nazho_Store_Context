
import './styles/index.css';
import App from './App';
import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter } from "react-router-dom"
import PaginationProvider from './Context/paginationContext';
import CartProvider from './Context/cartContext';
import StoreProvider from './Context/storeContext';
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
   
      <PaginationProvider>
        <CartProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </CartProvider>
      </PaginationProvider>
  
  </BrowserRouter>
)


