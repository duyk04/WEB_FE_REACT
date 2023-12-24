import React, { Component } from 'react'
import Member from './components/Member';

export default class App extends Component {
  constructor(props) {
    super(props);
    //tao state luu tru du lieu cua App
    this.state = {
      name: 'Khuong Duy',
      age: 20,
      add: 'HN'
    }
  }
  //hàm sử lý sự kiện khi thay đổi
  changeInfo = () => {
    // cập nhật dữ liệu trong state
    this.setState({
      name: 'Nguyen Khuong Duy',
      age: 21,
      add: 'YB'
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Demo-State</h1>
        <br/>
        <h2>Hiển thị dữ liệu từ state</h2>
        <div className='alert alert-info'>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
          <p>Add: {this.state.add}</p>
          <button onClick={this.changeInfo}>Change Info</button>
        </div>

        <hr/>
        <Member />
      </div>
    )
  }
}
