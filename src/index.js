
import './styles/index.css';
import App from './App';
import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter } from "react-router-dom"
import PaginationProvider from './Context/paginationContext';
import CartProvider from './Context/cartContext';
import StoreProvider from './Context/storeContext';
import UserProvider from './Context/userContext';
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
   <UserProvider>
      <PaginationProvider>
        <CartProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </CartProvider>
      </PaginationProvider>
      </UserProvider>
  </BrowserRouter>
)


