import React, { useState, useEffect, useContext, useRef, createContext } from 'react'
import Context from './Context';

export const ThemeContext = createContext();

export default function DemoUseContext() {
    // const arrTheme = ["green", "red", "blue", "white", "black"]
    const [theme, setTheme] = useState("black")
    const toggleTheme = () => {
        setTheme(theme === "black" ? "red" : "black")
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert alert-info' style={{ padding: 50, }}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Context />
            </div>
        </ThemeContext.Provider>
    )
}
