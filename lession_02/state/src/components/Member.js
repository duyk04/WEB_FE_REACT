import React, { Component } from 'react'

export default class Member extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Bùi Văn Tý',
            age : 20
        }
    }
    changeName = ()=>{
        this.setState({
            name: 'Bui Van Dan',
            age: 24
        })
    }
    render() {
        let {name, age} = this.state;
        return (
            <div className='alert alert-success'>
                <h2>Member</h2>
                <p>Name: {name} </p>
                <p>Name: {age}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
