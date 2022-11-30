import { createContext, useState } from "react";
import axios from "axios"
export const storeContext = createContext()

const StoreProvider = ({ children }) => {
    const [list, setlist] = useState([])
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState("")
    const [searchValue, setsearchValue] = useState("")



   const getProduct =async (thankApi) => {
    setloading(true)
        try {
          const response=await  axios
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
    return (
        <storeContext.Provider value={{getProduct,list, loading, error, message  }}>
            {children}
        </storeContext.Provider>
    )
}
export default StoreProvider