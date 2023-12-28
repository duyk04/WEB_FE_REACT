import React from 'react'
import Control from './components/Control'
import ListStudents from './components/ListStudents'
import FormStudent from './components/FormStudent'

function App() {
	return (
		<div className="row">
			<div className="col-lg-7 grid-margin stretch-card">
				<div className="card">
					<Control/>
					<ListStudents/>
				</div>
			</div>
			<div className="col-5 grid-margin">
				<FormStudent/>
			</div>
		</div>

	)
}

export default App