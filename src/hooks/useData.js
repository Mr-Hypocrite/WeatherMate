import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export const useTheme = () => {

    const context = useContext(DataContext)

    if (context === undefined) {
        throw new Error("useTheme() must be use inside a ThemeProvider")
    }

    return context
}