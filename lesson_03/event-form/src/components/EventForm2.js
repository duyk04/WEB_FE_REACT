import React from 'react'


function EventForm2() {
    const eventHandleClickButton1 = () => {
        alert("Load render")
    }
    const eventHandleClickButton2 = () => {
        alert("Khi click")
    }
    const eventHandleClickButton3 = (prams) => {
        alert(prams)
        
    }
    return (
        <div>
            <h2>Event Form - Function Components</h2>
            {/* Khi render */}
            {/* <button className='me-5 btn btn-info' onClick={eventHandleClickButton1()}>Button1</button> */}
            {/* Khi click */}
            <button className='me-5 btn btn-info' onClick={eventHandleClickButton2}>button2</button>
            {/*  Gọi thực hiện Khi click có tham số */}
            <button className='me-5 btn btn-info' onClick={()=>eventHandleClickButton3("Duy")}>Button3</button>
        </div>
    )
}

export default EventForm2