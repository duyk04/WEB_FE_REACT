import React from 'react'

function ContenUseCallback({ onIncrease }) {
    console.log('render');
    return (
        <>
            <p>Xin chao Duy!</p>
            <button onClick={onIncrease}>Click here!</button>
        </>
    )
}

export default ContenUseCallback