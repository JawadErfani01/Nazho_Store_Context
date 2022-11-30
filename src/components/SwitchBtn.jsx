import Switch from "react-switch"

import { useContext } from "react"
import { cartContext } from "../Context/cartContext"
const SwitchBtn = () => {
  const { change, total,changeMony } = useContext(cartContext)


  return (
    <div className='shadow flex justify-center bg-gray-200 items-center w-[50%] md:w-[20%] md:m-0 m-auto p-1.5'>
      <Switch
        checked={change}
        onChange={() => changeMony()}
        handleDiameter={28}
        offColor='#08f'
        onColor='#0ff'
        height={40}
        width={70}
        borderRadius={6}
        uncheckedIcon={<div className='text-center pt-2 '>AF</div>}
        checkedIcon={<div className='text-center   pt-2 '>US</div>}
        uncheckedHandleIcon={<div className='text-center  mt-1 '>US</div>}
        checkedHandleIcon={<div className='text-center  mt-1'>AF</div>}
        className='react-switch mx-2  '
        id='small-radius-switch'
      />
      <h2 className="text-xl p-1.5">
        {change ? (total * 88).toFixed(2) + "Af" : total.toFixed(2) + "$"}
      </h2>
    </div>
  )
}
export default SwitchBtn
