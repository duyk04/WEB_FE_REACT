import React from 'react'

function PersonalInfo (props) {
  return (
    <div>
      <h1>Hello world</h1>
      <img src={props.img} alt='...' style={{with:'150px', height: '150px'}}/>
      <h2>Xin chao! {props.name}</h2>
      <h3>Duy {props.age} tuoi</h3>
      <h3>Que quan {props.add}</h3>
    </div>
  )
}
export default PersonalInfo
