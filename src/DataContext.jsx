
import { createContext,useContext } from "react";
import { useState } from "react";
import { books } from "./data";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => 
{
    console.log(books);
const [bookData,setbookData] = useState(books);

    return(
        <DataContext.Provider value = {{bookData,setbookData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useBooks = () => useContext(DataContext)