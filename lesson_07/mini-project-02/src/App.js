import React, { useState } from 'react'
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




	// Tạo state

	const [listTask, setListTask] = useState(listTasks)


	// an hien form
	const [isToggle, setToggle] = useState(false)
	const [actionName, setActionName] = useState(" ")

	const handleCancel = (toggle) =>{
		setToggle(toggle)
	}

	const [task, setTask] = useState(" ")
	//renderForm

	let elementForm = isToggle === true ? <Form rederActionName={actionName} onCancel={handleCancel} task={task}/> : " ";

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
			<Control onAdd={handleAddOrEdit} />
			{/* CONTROL (SEARCH + SORT + ADD) : END */}

			{/* FORM : START */}
			{elementForm}
			{/* FORM : END */}

			{/* LIST : START */}
			<ListTask renderListTask={listTask} onEdit={handleAddOrEdit} />
		</div>

	)
}

export default App