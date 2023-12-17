import React, { Component } from 'react'

export default class FormSelect extends Component {
    constructor(props){
        super(props);
        this.state={
            couser: 'PHP'
        }
    }
    handleChange = (e) =>{
        this.setState({
            couser: e.target.value,
        })
    }
    render() {
        return (
            <>
                <h2>Form Select</h2>
                <label className='alert-info'>{this.state.couser}</label>
                <form >
                    <div className='form-input'>
                        <label>Name:</label>
                        <select className='\' name='couser' value={this.state.couser} onChange={this.handleChange}>
                            <option value={'PHP'}>PHP</option>
                            <option value={'C#'}>C#</option>
                            <option value={'JS'}>JS</option>
                        </select>
                    </div>
                    
                    <input type='submit' name='btnSubmit' value={'Submit'} />
                </form>
            </>
        )
    }
}
