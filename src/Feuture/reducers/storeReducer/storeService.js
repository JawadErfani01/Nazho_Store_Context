import axios from "axios"
const getProducts=()=>{
  return(
     axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
  ) 
}

const getCategory=(category)=>{
  return(  axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.data)
  )
}


export const storeService ={
    getProducts,
    getCategory
}