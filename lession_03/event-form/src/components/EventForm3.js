import React, { Component } from 'react'

export default class EventForm3 extends Component {
    constructor(props) {
        super(props)
        // quản lý đối tượng qua State
        this.state = {
            name: 'Khương Duy',
            age: 20,
            add: 'Hà Nội'
        }
    }
    // Hàm xử lý khi click btn 1
    eventHandleClickButton1 = () => {
        alert(this.state.name + "\n" + this.state.age)
    }
    // Hàm xử lý thay đổi dữ liệu trong state

    eventHandleChange = (name, age, add) => {
        this.setState({
            name: name,
            age: age,
            add: add
        })
    }
    render() {
        return (
            <div>
                <h2>
                    Event - Sử dụng State
                </h2>
                <div>
                    {/* phát sinh sự kiện lấy dữ liệu trong state */}
                    <button className='btn btn-info' onClick={this.eventHandleClickButton1}>Button1</button>
                    {/* phát sinh sự kiện thay dổi dữ liệu trong state */}
                    <button className='btn btn-info ms-5' onClick={() => this.eventHandleChange("Nguyễn Khương Duy", 21, "Yên Bái")}>Button1</button>
                </div>
            </div>
        )
    }
}
