import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./pages/Home"
import Header from "./components/Navbar/Header"
import Fotter from "./components/Fotter/Fotter"
import Cart from "./pages/Cart"
import Login from "./pages/Login"


function App() {
  return (
    <>
      <div
        className=' flex flex-col  justify-between'
      >
        <div>
          <Header />
          <ToastContainer
            position='bottom-left'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <div>
          <Fotter />
        </div>
      </div>
    </>
  )
}

export default App