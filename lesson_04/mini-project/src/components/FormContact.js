import React, { Component } from 'react'

export default class FormContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Duy",
            add: "YB"
        }
    }
    handelChange = (e) => {
        let name = e.target.name; // lấy ra tên điều khiển đang tương tác
        let val = e.target.value; // lấy ra giá trị của điêu khiển
        this.setState({
            [name] : val
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        // this.props.onSubmit(this.state.name, this.state.add)
        this.props.onSubmit(this.state)

    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>FormContact</h2>
                <form>
                    <div className='form-group alert alert-light'>
                        <label form='name'>Name: </label>
                        <input type='text' name='name' value={this.state.name} onChange={this.handelChange}/>
                    </div>
                    <div className='form-group alert alert-light'>
                        <label form='add'>Add: </label>
                        <input type='text' name='add' value={this.state.add} onChange={this.handelChange}/>
                    </div>
                    <button onClick={this.handelSubmit}>Submit !</button>
                    <div className='form-group alert alert-light mt-3'>
                        <p>Tên: {this.state.name}</p>
                        <p>Địa chỉ: {this.state.add}</p>
                    </div>
                </form>
            </div>
        )
    }
}
