import { useContext, useEffect, useState } from 'react'
import Product from '../components/Product'
import { toast } from 'react-toastify'
import SwitchBtn from './SwitchBtn'
import Loading from '../components/Loading'
import MyPagoination from './MyPagoination'
import SelectAmount from './SelectAmount'
import { FaSearch } from 'react-icons/fa'
import { paginationContext } from '../Context/paginationContext'
import { storeContext } from '../Context/storeContext'
function Products() {
  const [title, settitle] = useState('')
  const { list, loading, error, message, getProduct, getCategory } =
    useContext(storeContext)
  const { currentPage, dataPerPage } = useContext(paginationContext)

  const indexOfLastCart = currentPage * dataPerPage
  const indexOfFirstCart = indexOfLastCart - dataPerPage

  const handelSearch = list.filter((item) =>
    item.title.toLowerCase().includes(title)
  )
  const handelCategory = (e) => {
    getCategory(e.target.value)
  }

  const newList = handelSearch.slice(indexOfFirstCart, indexOfLastCart)

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) {
    toast.error(message)
  }

  return (
    <div className='text-center'>
      <h1 className='welcomeText p-5 pb-3  text-center text-3xl sm:text-4xl md:text-5xl'>
        Welcome to Nazho Store
      </h1>
      <p className='text-red-600'> (  Conatext API  )</p>
      <div className='text-center my-3  shadow md:flex w-[80%] m-auto md:w-[100%] md:justify-around items-center p-3 '>
        <form className='my-3 md:w-[25%]  relative'>
          <input
            className='w-[100%] p-3 py-2 rounded-lg outline-none border   shadow-lg '
            placeholder='Search...'
            value={title}
            name='title'
            onChange={(e) => settitle(e.target.value)}
          />
          <span className='absolute right-[18px] opacity-50 top-[14px] '>
            <FaSearch />
          </span>
        </form>
        <div className='flex md:w-[50%]  justify-around items-center '>
          <select
            className='md:w-[50%] shadow-lg p-3 my-3 rounded-lg  py-2 outline-none border '
            id='exampleSelect'
            onChange={(e) => handelCategory(e)}
            name='category'
            type='category'
          >
            <option selected='Choose Category' disabled>
              Choose Category
            </option>
            <option value='All'>All</option>
            <option value='electronics'>electronics</option>
            <option value='jewelery'>jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
          <SelectAmount />
        </div>
        <SwitchBtn />
      </div>

      <hr style={{ width: '96%', margin: 'auto' }} />
      {loading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 m-3 '>
          {newList.map((item, index) => (
            <div key={index} className='  m-3  '>
              <Product item={item} />
            </div>
          ))}
        </div>
      )}
      {handelSearch.length >= dataPerPage && (
        <MyPagoination handelSearch={handelSearch} />
      )}
    </div>
  )
}
export default Products
