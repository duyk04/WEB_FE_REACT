import React, { useEffect, useState } from 'react'
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import ListTask from './components/ListTask'


function App() {
	//(Mock Data)

	const listTasks = [
		{ taskId: 1, taskName: "Học lập trình frontend", level: "Small" },
		{ taskId: 2, taskName: "Học lập trình reactjs", level: "Medium" },
		{ taskId: 3, taskName: "Lập trình với Frontend - Reactjs", level: "High" },
		{ taskId: 4, taskName: "Lập trình Fullstack (PHP, Java, NetCore)", level: "Small" },
	]

	// luu data trong localStorage
	useEffect(() => {
		let data = JSON.parse(localStorage.getItem("Data_Rj"))
		if (data === null || data === 0) {
			data = listTasks;
			localStorage.setItem("Data_Rj", JSON.stringify(data))
		} else {
			setListTask(data)
		}

	}, [])


	// Tạo state

	const [listTask, setListTask] = useState(listTasks)

	const taskNull = {
		taskId: 0,
		taskName: " ",
		level: "Small "
	}
	const [task, setTask] = useState(taskNull)
	// an hien form
	const [isToggle, setToggle] = useState(false)
	const [actionName, setActionName] = useState(" ")

	const [keyword, setKeyword] = useState(" ")

	const handleCancel = (toggle) => {
		setToggle(toggle)
	}

	const handleSubmit = (toggle, actionName, task) => {
		let list = listTask
		if (actionName === "Save") {
			let taskIdMax = listTask[listTask.length - 1].taskId;
			let taskNew = {
				taskId: taskIdMax + 1,
				taskName: task.taskName,
				level: task.level
			}
			list = [...listTask, taskNew]
			setListTask(list);
			setToggle(toggle)
		}
		else if (actionName === "Update") {

			for (let i = 0; i < list.length; i++) {
				if (list[i].taskId === task.taskId) {
					list[i] = task;
					break
				}
			}
			// let taskNew = {
			// 	taskId: taskIdMax + 1,
			// 	taskName: task.taskName,
			// 	level: task.level
			// }
			setListTask(list);
			setToggle(toggle)
		}


		// luu lai vao localSto
		localStorage.setItem("Data_Rj", JSON.stringify(list))
		// listTasks.push(task)
	}
	const handleDelete = (actionName, task) => {
		let updatedList = listTask.filter((item) => item.taskId !== task.taskId);

		console.log(task, actionName);
		setListTask(updatedList);
		localStorage.setItem("Data_Rj", JSON.stringify(updatedList))
	}


	const handleSearch = (keyword) => {
		setKeyword(keyword)
		console.log(keyword);
	}

	useEffect(() => {
		var listSearch = listTasks
		if (keyword === null || keyword === "" || keyword === undefined) {

		}
		else{
			listSearch = listTasks.filter(x=>x.taskName.includes(keyword))
		}
		setTask(listSearch)
	}, [])
	//renderForm

	let elementForm = isToggle === true ? <Form rederActionName={actionName} onCancel={handleCancel} task={task} onSubmit={handleSubmit} /> : " ";

	//xu ly add or edit tast

	const handleAddOrEdit = (toggle, actionName, task) => {
		setToggle(toggle)
		setActionName(actionName)
		setTask(task)
	}
	return (
		<div className="container">
			{/* TITLE : START */}
			<Title />
			{/* TITLE : END */}

			{/* CONTROL (SEARCH + SORT + ADD) : START */}
			<Control onAdd={handleAddOrEdit} onSearch={handleSearch} />
			{/* CONTROL (SEARCH + SORT + ADD) : END */}

			{/* FORM : START */}
			{elementForm}
			{/* FORM : END */}

			{/* LIST : START */}
			<ListTask renderListTask={listTask} onEdit={handleAddOrEdit} onDelete={handleDelete} />
		</div>

	)
}

export default App