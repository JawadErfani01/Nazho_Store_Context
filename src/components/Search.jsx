import { useDispatch } from "react-redux"
import { searchList } from "../Feuture/reducers/storeReducer/storeSlice"
import { useEffect, useState } from "react"
const Search = () => {
  const dispatch = useDispatch()
  const [title, settitle] = useState("")
  const handelSearch = (e) => {
    settitle(e.target.value)
    dispatch(searchList(title))
  }

  useEffect(() => {
    dispatch(searchList(title))
  }, [title, dispatch])

  return (
    <form className="m-3">
      <input type="search" className="p-3 rounded-full outline-none m-3" name="title" placeholder='Search...' value={title} onChange={(e)=>handelSearch(e)} />
    </form>
  )
}
export default Search
