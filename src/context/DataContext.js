import { createContext, useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import env from "react-dotenv"

export const DataContext = createContext()

export function DataProvider({ children }) {


    const[url, setURL] = useState(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${ env.API_KEY }`)

    const { data, isPending, error } = useFetch(url)

    const [url2, setURL2] = useState(null)
    useEffect(() => {
        data && setURL2(`https://api.openweathermap.org/data/2.5/onecall?lat=${ data && data.coord.lat }&lon=${ data && data.coord.lon }&exclude=hourly,minutely&appid=${ env.API_KEY }`)
    }, [data])

    const { data: foreCastData} = useFetch(url2)

    return(
        <DataContext.Provider value={{ data, foreCastData, isPending, error, setURL }}>
            { children }
        </DataContext.Provider>
    )
}