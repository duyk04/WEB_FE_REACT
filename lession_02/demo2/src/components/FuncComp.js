// 1.import
import React from 'react'

// 2.Xay dung function component 
function FuncComp(props){
    const show =(params) =>{
        return (
            <>
                <h2 className='alert alert-info'> Wellcome {params}</h2>
            </>
        )
    }
    return(
        <>
            <h1>Demo function Component - Su dung JSX Expresstion de hien thi du lieu tu prop</h1>
            <hr/>
            <div className='alert alert-danger'>
                <p>Name: {props.name}</p>
                <p>Add: {props.address}</p>
            </div>
            {show('Khuong Duy')}
        </>
    )
}

// 3. export
export default FuncComp;