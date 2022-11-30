
import './styles/index.css';
import App from './App';
import React from "react"
import ReactDOM from "react-dom/client"
import { store } from "./Feuture/app/store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import PaginationProvider from './Context/paginationContext';
import CartProvider from './Context/cartContext';
import StoreProvider from './Context/storeContext';
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PaginationProvider>
        <CartProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </CartProvider>
      </PaginationProvider>
    </Provider>
  </BrowserRouter>
)


