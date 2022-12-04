import { createContext, useState } from "react";

export const userContext = createContext()

const UserProvider = ({ children }) => {
    const user=localStorage.getItem("userInfo")
    const [userInfo] = useState(null||JSON.parse(user))
 console.log(userInfo);

    return (
        <userContext.Provider value={{userInfo}}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider