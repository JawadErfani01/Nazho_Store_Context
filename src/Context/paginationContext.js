import { createContext, useState } from "react";

export const paginationContext = createContext()

const PaginationProvider = ({ children }) => {
    const [currentPage, setcurrentPage] = useState(1)
    const [dataPerPage, setdataPerPage] = useState(8)
    const handleNext = () => {
        setcurrentPage(currentPage + 1)
    }
    const handleBack = () => {
        setcurrentPage(currentPage - 1)
    }

    const handlePageinate = (number) => {
        setcurrentPage(number)
    }
    const changeDispalyData = (number) => {

        setdataPerPage(number)
    }
    return (
        <paginationContext.Provider value={{dataPerPage,currentPage, handleBack, handleNext, handlePageinate, changeDispalyData }}>
            {children}
        </paginationContext.Provider>
    )
}
export default PaginationProvider