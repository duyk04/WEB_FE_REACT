import React, { useContext } from 'react'
import { ThemeContext } from './DemoUseContext'

function Info() {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <p className={theme} style={{ color: theme }}>
                Color: {theme}
            </p>
            <div style={{width: 100, height: 100, backgroundColor: theme}}>

            </div>

        </div>
    )
}

export default Info