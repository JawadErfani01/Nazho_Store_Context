import { useContext } from 'react'
import { paginationContext } from '../Context/paginationContext'

const SelectAmount = () => {
  const { changeDispalyData } = useContext(paginationContext)
  return (
    <div>
      <form>
        <select
          className='w-[100%] p-3 rounded-lg  py-2 border '
          id='exampleSelect'
          onChange={(e) => changeDispalyData(e.target.value)}
          name='select'
          type='select'
        >
          <option value='4'>Select amount</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='8'>8</option>
          <option value='10'>10</option>
        </select>
      </form>
    </div>
  )
}

export default SelectAmount
