import './App.css';
import CreateUser from './Components/CreateUser';
import ListUserApi from './Components/ListUserApi';
import ListUserLocal from './Components/ListUserLocal';

function App() {
	return (
		<div className="container boder mt-5">
			<div className="logo">
				<img src="https://devmaster.edu.vn/images/logo.png" />
				<div>
					<ListUserLocal/>
				</div>
				<div>
					<ListUserApi/>
				</div>
				<div>
					<CreateUser/>
				</div>
			</div>
		</div>
	);
}

export default App;
