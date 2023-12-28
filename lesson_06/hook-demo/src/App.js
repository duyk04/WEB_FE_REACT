import React from 'react'
import ClassComp from './components/ClassComp'
import DemoUseState from './components/DemoUseState'
import DemoUseEffect from './components/DemoUseEffect'
import DemoUseContext from './components/DemoUseContext'
import DemoUseCallBack from './components/DemoUseCallBack'

export default function App() {
	return (
		<div className='container mt-5'>
			<div className='col-md-2'>
				<img className='w-100' style={{ backgroundColor: "#ccc" }} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'/>
			</div>
			<h1>Hook Demo</h1>
			<hr />
			<h2>State in Class Component</h2>
			<ClassComp/>
			<DemoUseState/>
			<div>
				<DemoUseEffect/>
			</div>
			<div>
				<DemoUseContext/>
			</div>
			<div>
				<DemoUseCallBack/>
			</div>
		</div>
	)
}
