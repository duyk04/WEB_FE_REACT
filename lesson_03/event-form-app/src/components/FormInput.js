import React, { Component } from 'react'

export default class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Duy'
        }
    }
    //Hàm xử lý sự kiện khi thay đổi dữ liệu trong ô Input
    handleChange = (event) => {
        this.setState({
            userName: event.target.value,
        })
    }
    render() {
        return (
            <>
                <h2>Form Input</h2>
                <form >
                    <div className='form-input'>
                        <label>Name:</label>
                        <input
                            className='form-control'
                            type='text'
                            name='userName'
                            value={this.state.userName}
                            onChange={this.handleChange} />
                    </div>
                    <input type='submit' name='btnSubmit' value={'Submit'} />
                </form>
            </>
        )
    }
}
