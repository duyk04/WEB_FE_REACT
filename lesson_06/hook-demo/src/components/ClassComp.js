import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            age: 0
        }
    }
    handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        this.setState({
            [name]: val
        })

    }

    render() {
        return (
            <div>
                <form>
                    <p>
                        Name: <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                    </p>
                    <p>
                        Age: <input type='number' name='age' value={this.state.age} onChange={this.handleChange} />
                    </p>
                    <button type='submit'>Click</button>
                </form>
            </div>
        )
    }
}

