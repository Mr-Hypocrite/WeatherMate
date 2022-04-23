import { createContext } from "react"

export const DataContext = createContext()

export function DataProvider({ children }) {
    return(
        <DataContext.Provider>
            
        </DataContext.Provider>
    )
}