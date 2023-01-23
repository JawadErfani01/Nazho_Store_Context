import { createContext, useState } from "react";
import axios from "axios"
import {products} from "../data/products"

export const storeContext = createContext()




const StoreProvider = ({ children }) => {
    const [list, setlist] = useState(products||[])
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState("")



    const getProduct = async () => {
        setloading(true)
        try {
            const response = await axios
                .get("https://fakestoreapi.com/products")
                .then((res) => res.data)
            setlist(response)
            setloading(false)
        } catch (err) {
            setmessage(err.message)
            seterror(true)
            setloading(false)
        }
    }

    const getCategory = async (category) => {
        setloading(true)
        try {
            if (category === 'All') {
                getProduct()
            } else {
                const response = await axios
                    .get(`https://fakestoreapi.com/products/category/${category}`)
                    .then((res) => res.data)
                setlist(response)
                setloading(false)
            }
        } catch (err) {
            setmessage(err.message)
            seterror(true)
            setloading(false)
        }
    }


    return (
        <storeContext.Provider value={{ getProduct, getCategory, list, loading, error, message }}>
            {children}
        </storeContext.Provider>
    )
}
export default StoreProvider