import { createContext,useState } from "react";

export const NameContext=createContext()

const NameContextProvider = ({children}) => {

    const[number,setNumber] = useState(10);

    return(
    <>
    <NameContext.Provider value={{number,setNumber}}>
        {children}
    </NameContext.Provider>
    </>);
}
export default NameContextProvider;