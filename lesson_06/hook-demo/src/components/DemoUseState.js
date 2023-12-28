import React, { useState } from 'react'

export default function DemoUseState() {
    const [count, setCount] = useState(1);
    const [fullName, setFullName] = useState('Duy')

    const handleChange = (e) => {
        setCount(prev => prev + 1)
    }

    // su dung useState voi gia tri bang mang
    const arr = [20, 40]
    const [list, setList] = useState(arr);

    const handleClickRandom = () => {
        let num = parseInt(Math.random()*100)
        // setList([
        //     // ...list,
        //     // num
            
        // ])
        let newList = [...list];
        newList.push(num)
        setList(newList)

    }
    return (
        <div className='container mt-5'>
            <h1>DemoUseState</h1>
            <div>
                FullName: <input value={fullName} name='name' onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div>
                Count : <input value={count} name='cout' onChange={handleChange} />
            </div>
            <div className='alert alert-info'>
                <p>FullName: {fullName}</p>
                <p>Count : {count}</p>
            </div>
            <div className='alert alert-info'>
                <button onClick={handleClickRandom}>Random to list</button>
                <p>Number: {list.toString()}</p>
            </div>
        </div>

    )
}
