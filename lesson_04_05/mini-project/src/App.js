import React, { Component } from 'react';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [
				{ studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
				{ studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
				{ studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
				{ studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
			],
			isToggle: false,
			actionName: " ",
			student: {}, // obj student
			keyword: " "
		}
	}
	handleAddOrEditView = (toggle, actionName, student) => {
		this.setState({
			isToggle: toggle,
			actionName: actionName,
			student: student
		})
	}
	//hàm xử lý sự kiện submit form
	handleSubmit = (toggle, actionName, student) => {
		console.log(toggle, actionName, student);
		// this.setState({
		// 	isToggle: toggle,

		// })
		let { students } = this.state;
		//Khi thêm mới 
		if (actionName === "Close") {
			this.setState({
				isToggle: false
			})
		}
		if (actionName === "Add New") {
			// let { students } = this.state;
			students.push(student);
			// this.setState({
			// 	students: students
			// })
			this.setState({
				isToggle: false
			})
		}
		// khi sửa
		if (actionName === "Update") {
			//let { students } = this.state;
			for (let i = 0; i < students.length; i++) {
				if (students[i].studentId === student.studentId) {
					students[i] = student;
					break
				}
			}
			// this.setState({
			// 	students:students
			// })
			this.setState({
				isToggle: false
			})
		}


	}
	handleDelete = (student) => {
		// alert("Đồng ý xóa !", student.studentId)
		// console.log(student);
		let { students } = this.state;

		let list = students.filter(x => x.studentId !== student.studentId)
		this.setState({
			students: list
		})

	}

	handleSearch = (keyword) => {
		this.setState({
			keyword: keyword
		})
	}
	render() {
		let elementForm = this.state.isToggle === true ?
			<Form renderActionName={this.state.actionName}
				renderStudent={this.state.student}
				onSubmit={this.handleSubmit} /> : "";

		//xử lý dữ liệu tìm kiếm
		let { keyword, students } = this.state;
		let dataFilter = students;
		if (keyword !== "") {
			dataFilter = students.filter(x => x.studentName.toLowerCase().includes(keyword.toLowerCase()))
		}

		return (
			<div className="row">
				<div className="col-lg-7 grid-margin stretch-card">
					<div className="card">
						<Control onAdd={this.handleAddOrEditView}
							onSearch={this.handleSearch} />
						<ListStudent
							// renderStudents={this.state.students}
							renderStudents= {dataFilter}
							onViewOrEdit={this.handleAddOrEditView}
							onDelete={this.handleDelete} />
					</div>
				</div>
				<div className="col-5 grid-margin">
					<div className="card">
						{elementForm}
					</div>
				</div>
			</div>

		)
	}
}
