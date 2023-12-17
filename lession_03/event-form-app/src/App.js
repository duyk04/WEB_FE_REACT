import React, { Component } from 'react'
import FormInput from './components/FormInput'
import FormSelect from './components/FormSelect'
import FormRegistry from './components/FormRegistry'

export default class App extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className='container border mt-3 bg-white' >
				<h1 className='text-center'>DEMO REACT FORM - Controlled Component</h1>
				<FormInput/>
				<FormSelect/>
				<FormRegistry/>
			</div>
		)
	}
}
