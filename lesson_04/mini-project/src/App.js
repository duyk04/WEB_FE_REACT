import React, { Component } from 'react'
import FormContact from './components/FormContact';
import ViewConact from './components/ViewConact';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Duy',
			phone: '0853885203'
		}
	}
	handleClick = () => {
		alert('Test!')
	}
	handleClick1 = (param) => {
		alert(param)
	}
	handleChange = (param) => {
		this.setState({
			name: param
		})
	}
	//hàm nhận handelSubmit từ component form contac
	handleSubmit = (obj) => {
		console.log("Form Contact -> App ", obj);
	}
	render() {
		return (
			<div className='container mt-5 border'>
				<h1>Review Event Form</h1>
				<hr />
				<button onClick={this.handleClick}>Click Here!</button>
				<hr />
				<button onClick={() => this.handleClick1("Duy")}>Click Here!</button>
				<hr />
				<h2>{this.state.name}</h2>
				<button onClick={() => this.handleChange("Khuong Duy")}>Change</button>
				<hr />
				<FormContact onSubmit={this.handleSubmit} />
				<ViewConact renderContact={this.state} />
			</div>
		)
	}
}
