import { createContext, useReducer, useState } from "react"

export const DataContext = createContext()

const themeReducer = (url, action) => {
    switch (action.type) {
        case 'CHANGE_URL': 
            return { url: action.payload }

        default:
            return url
    }
}

export function DataProvider({ children }) {

    const [url, dispatch] = useReducer(themeReducer, {
        url: '',
    })

    const changeURL = (url) => {
        dispatch({ type: 'CHANGE_URL', payload: url})
    }

    return(
        <DataContext.Provider value={{ url, changeURL }}>
            { children }
        </DataContext.Provider>
    )
}