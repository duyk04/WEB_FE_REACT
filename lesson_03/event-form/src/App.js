import React, { Component } from 'react'
import EventForm from './components/EventForm'
import EventForm2 from './components/EventForm2'
import EventForm3 from './components/EventForm3'
import EventForm4 from './components/EventForm4';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			company:"Dev"
		}
	}
	// hàm xử lý sự kiện người dùng click từ componets Eventform
	onChangeCompany=(params)=>{
		this.setState({
			company:params
		})
	}
	render() {
		return (
			<div className="App border container mt-5">
				<div className='alert-info'>
					<h1>DEMO-EVENT-FORM LIST RENDER</h1>
				</div>
				
				<div className='mt-5 alert-info'>
					<EventForm />
				</div>

				<div className='mt-5 alert-info'>
					<EventForm2 />
				</div>

				<div className='mt-5 alert-info'>
					<h2>Sử dụng dữ liệu trong state</h2>
					<EventForm3 />
				</div>

				<div className='mt-5 alert-info'>
					<h2>Sử dụng dữ liệu từ state: {this.state.company}</h2>
					<EventForm4 renderCompany={this.state.company} onChangeCompany={(args)=>this.onChangeCompany(args)}/>
				</div>

			</div>
		)
	}
}
