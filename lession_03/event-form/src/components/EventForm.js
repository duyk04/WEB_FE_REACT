import React, { Component } from 'react'

export default class EventForm extends Component {
    //ham xu ly su kien tren button1
    eventHandleClick1 = () => {
        alert('Click Button1');
    }
    //ham xu ly su kien khi nguoi dung click tren button2
    eventHandleClick2 = () => {
        alert('Click Button2');
    }
    //ham xu ly cac tham so dau vao
    eventHandleClick3 = (param) =>{
        alert("Hi:"+ param )
    }
    render() {
        return (
            <div>
                <h2>Event</h2>
                {/* ham dc goi khi render (1lan duy nhat) */}
                {/* <button onClick={this.eventHandleClick1()}>Click Button1</button> */}
                {/* ham dc goi khi nguoi dung click */}
                <button className='btn btn-success me-5' onClick={this.eventHandleClick2}>Click Button2</button>
                {/* Hàm có tham số */}
                <button className='btn btn-success' onClick={()=>this.eventHandleClick3()}>Click Button3</button>
            </div>
        )
    }
}
