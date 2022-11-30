import { createContext, useState } from "react";

export const cartContext = createContext()

const CartProvider = ({ children }) => {
    const [currentPage, setcurrentPage] = useState(1)
    const [dataPerPage, setdataPerPage] = useState(8)

    
    return (
        <cartContext.Provider value={{dataPerPage,currentPage}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider