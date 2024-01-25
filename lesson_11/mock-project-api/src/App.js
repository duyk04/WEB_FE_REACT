import { BowserRouter, BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import './App.css';
import ListCategories from './Components/ListCategories';
import Nav from './Components/Nav';
import ListNew from './Components/ListNew';
import Home from './Components/Home';
import Form from './Components/Form';
import NotFound from './Components/NotFound';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				{/* <ListCategories />
				<ListNew /> */}
				<Routes>
					<Route path='/home' element={<Home/>}></Route>
					<Route path='/categories' element={<ListCategories />}></Route>
					<Route path='/new' element={<ListNew />}></Route>
					{/* mặc định load trang home lần đầu */}
					<Route index element={<Navigate to='/home' />} />

					<Route path='*' element={<NotFound/>}></Route>
				</Routes>
				{/* <Form/> */}
			</BrowserRouter>

		</div>
	);
}

export default App;
