import React, { useEffect, useState } from 'react'

export default function DemoUseEffect() {
    // su dung state
    const [pram1, setParam1] = useState("")
    const [pram2, setParam2] = useState("")
    const [pram3, setParam3] = useState("")

    // useEfect (callback)
    useEffect(() => {
        // setParam1(pram1+ "Dev: ")
        console.log("useEfect");
    })

    useEffect(() => {
        setParam1(pram1 + "Dev: 1")
        setParam2(pram2 + "Dev: 2")
        setParam3(pram3 + "Dev: 3")
    }, [])


    const [count, setCount] = useState(0)
    const handleChange = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setParam3(pra => pra + " - " + count)
    },[count])
    return (
        <div className='alert alert-danger'>
            <h2>Demo-UseEffect</h2>
            <p>Param1: {pram1}</p>
            <p>Param2: {pram2}</p>
            <p>Param3: {pram3}</p>
            <button onClick={handleChange}>Click here!</button>
        </div>
    )
}
