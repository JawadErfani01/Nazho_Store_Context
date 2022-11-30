import { createContext, useState } from "react";

export const cartContext = createContext()

const CartProvider = ({ children }) => {
    const [items, setitems] = useState([])
    const [NOrder, setNOrder] = useState(0)
    const [total, settotal] = useState(0)
    const [change, setchange] = useState(false)
console.log(items);
    const addToCart = (product) => {
     
        const index = items?.findIndex(
            (item) => item.id === product.id
        )
        if (index >= 0) {
            items[index].quantitiy += 1
        } else {
          items.push({
                ...product,
                quantitiy: 1,
            })
            setNOrder(NOrder + 1)

            window.localStorage.setItem("product", product)
        }
    }

    const increment = (product) => {
        const index = items.findIndex(
            (item) => item.id === product.id
        )
        if (items[index].quantitiy >= 1) {
            items[index].quantitiy += 1
            //   toast.info(`You increased ${action.payload.title} `)
            settotal(total + product.price)
        }
    }

    const decrement = (product) => {
        const index = items.findIndex(
            (item) => item.id === product.id
        )

        if (items[index].quantitiy > 1) {
            items[index].quantitiy -= 1
            settotal(total - product.price)
            //   toast.error(`You Decreased ${action.payload.title}`)
        }
    }

    const deleteItem = (product) => {
        setitems(items.filter((item) => item.id !== product.id))
        settotal(total - product.price * product.quantitiy)
        setNOrder(NOrder - 1)
        // toast(`You Delete ${action.payload.title} from cart`)
    }

    const clearCart = () => {
        setitems([])
        settotal(0)
        setNOrder(0)
    }

    const getTotalPrice = (product) => {
        settotal(total + product.price)
    }

    const changeMony = () => {
        setchange(!change)
    }


    return (
        <cartContext.Provider value={{items, change,total,NOrder , addToCart, changeMony, clearCart, getTotalPrice, deleteItem, increment, decrement }}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider