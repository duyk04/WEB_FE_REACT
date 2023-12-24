import React, { Component } from 'react'

export default class FormRegistry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            age: "",
            couser: "PHP"
        }
    }

    //hàm xử lý sự kiện khi thay đổi dữ liệu trên form
    handleChange = (e) => {
        let name = e.target.name
        let val = e.target.value
        this.setState({
            [name]:val
        })
    }

    handleSubmit = () => {
        // console.log(this.state.userName);
    }

    render() {
        return (
            <>
                <h1>FormRegistry</h1>
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
                    <div className='form-input'>
                        <label>Age:</label>
                        <input
                            className='form-control'
                            type='number'
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChange} />
                    </div>


                    <div className='form-input'>
                        <label>Name:</label>
                        <select className='form-control' name='couser' value={this.state.couser} onChange={this.handleChange}>
                            <option value={'PHP'}>PHP</option>
                            <option value={'C#'}>C#</option>
                            <option value={'JS'}>JS</option>
                        </select>
                    </div>

                    <input type='submit' name='btnSubmit' value={'Submit'} onClick={this.handleSubmit} />
                </form>
            </>
        )
    }
}
