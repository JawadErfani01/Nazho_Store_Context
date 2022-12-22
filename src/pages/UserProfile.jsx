import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/cartContext'
import { userContext } from '../Context/userContext'
import SwitchBtn from '../components/SwitchBtn'
const UserProfile = () => {
  const { items } = useContext(cartContext)
  const { userInfo } = useContext(userContext)
  return (
    <div className='flex justify-center mb-8  flex-col items-center mt-[12%]'>
      <div className='text-center'>
        <img
          src='assets/jawad.jpg'
          className='m-auto w-[150px] h-[150px] rounded-full'
          alt='jawad'
        />
        <h1 className='text-xl font-bold capitalize'>{userInfo.userName}</h1>
        <p className='text-lg italic'>{userInfo.email}</p>
      </div>
      {items.length === 0 ? (
        <div className='text-center'>
          <p className='text-xl m-3 text-danger'>you don't have any order</p>
          <Link
            className=' p-1 rounded-lg px-3 m-6  bg-slate-700 text-white '
            to='/'
          >
            Buy Now
          </Link>
        </div>
      ) : (
        <table className='border w-[90%] my-6'>
          <thead className='bg-white border-b'>
            <tr>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                #
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Name of product
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Quantitiy
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Price
              </th>
            </tr>
          </thead>
          {items.length > 0 &&
            items.map((item, index) => {
              const { title, price, quantitiy } = item
              return (
                <tbody key={index}>
                  <tr className='bg-gray-100 border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      {index + 1}
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                      {title}
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                      {quantitiy}
                    </td>
                    <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                      {price}$
                    </td>
                  </tr>
                </tbody>
              )
            })}
        </table>
      )}

      {items.length > 0 && <SwitchBtn />}
    </div>
  )
}

export default UserProfile
