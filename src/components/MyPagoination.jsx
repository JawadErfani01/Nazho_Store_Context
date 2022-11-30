
import { paginationContext } from '../Context/paginationContext'
import { useContext } from "react"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const MyPagoination = ({ handelSearch }) => {

  const { currentPage, dataPerPage,handleBack,handleNext,handlePageinate } = useContext(paginationContext)
  let pageNumbers = []
  for (
    let index = 1;
    index <= Math.ceil(handelSearch.length / dataPerPage);
    index++
  ) {
    pageNumbers.push(index)
  }
  return (
    <div className='m-5  mx-auto p-2 rounded-lg'>
      <button
        className={`${
          currentPage === 1 && `opacity-50`
        } p-2 border-0 px-2   mx-1 text-lg`}
        disabled={currentPage === 1}
        onClick={() => handleBack()}
      >
        <FaArrowLeft />
      </button>
      {pageNumbers.map((number, index) => {
        return (
          <button
            key={index}
            className='rounded-lg bg-gray-200 border-0 px-2 h-8 w-8 mx-1 text-lg'
            onClick={() =>handlePageinate(number)}
          >
            {number}
          </button>
        )
      })}

      <button
        className={`'${
          currentPage === pageNumbers.length && `opacity-50`
        } p-2 border-0 px-2 mx-1 text-lg'`}
        disabled={currentPage === pageNumbers.length}
        onClick={() => handleNext()}
      >
        <FaArrowRight />
      </button>
    </div>
  )
}
export default MyPagoination
