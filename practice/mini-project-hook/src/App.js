import React, { useState } from 'react';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import FormStudent from './components/FormStudent';

function App() {
	const [students, setStudents] = useState([
		{ studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
		{ studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
		{ studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
		{ studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
	]);
	const [isToggle, setIsToggle] = useState(false);
	const [actionName, setActionName] = useState("");
	const [student, setStudent] = useState({});
	const [keyword, setKeyword] = useState("");

	return (
		<div className="row">
			<div className="col-lg-7 grid-margin stretch-card">
				<div className="card">
					<p>ddd{students[1].studentId}</p>
					
					<Control />
					<ListStudents renderStudents={students} />
				</div>
			</div>
			<div className="col-5 grid-margin">
				<FormStudent  />
			</div>
		</div>
	);
}

export default App;
