import { createContext, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import env from "react-dotenv"

export const DataContext = createContext()

export function DataProvider({ children }) {

    const[url, setURL] = useState(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${ env.REACT_APP_API_KEY }`)

    const { data, isPending, error } = useFetch(url)

    return(
        <DataContext.Provider value={{ data, isPending, error, url, setURL }}>
            { children }
        </DataContext.Provider>
    )
}