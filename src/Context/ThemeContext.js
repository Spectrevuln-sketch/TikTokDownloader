import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'

const ThemeContext = createContext()
const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({ theme: 'dark' })
    return (
        <ThemeContext.Provider value={{ theme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
export {
    ThemeContextProvider
}
