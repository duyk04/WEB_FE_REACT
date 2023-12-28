import React, { useCallback, useState } from 'react'
import ContenUseCallback from './ContenUseCallback'

export default function DemoUseCallBack() {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])
    return (
        <div className='alert alert-danger'>
            <ContenUseCallback onIncrease={handleIncrease}>

            </ContenUseCallback>
            <h1>
                {count}
            </h1>
        </div>
    )
}
