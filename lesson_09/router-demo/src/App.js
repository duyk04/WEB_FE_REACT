import logo from './logo.svg';
import './App.css';
import { BowserRouter, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './Componets/Header';
import Menu from './Componets/Menu';
import Home from './Componets/Home';
import Catagories from './Componets/Categories';
import About from './Componets/About';
import NotFound from './Componets/NotFound';
import Program from './Componets/Program';
import Kid from './Componets/Kid';
import Network from './Componets/Network';

function App() {
	return (
		<section className="container">
			<BrowserRouter>
				{/* {Headers} */}
				<Header />
				{/* {Menu} */}
				<Menu />
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/categories' element={<Catagories></Catagories>}>
						<Route path='program' element={<Program/>}></Route>
						<Route path='kid' element={<Kid/>}></Route>
						<Route path='network' element={<Network/>}></Route>
					</Route>
					<Route path='/about' element={<About></About>}></Route>
					<Route path='*' element={<NotFound></NotFound>}></Route>
				</Routes>
				{/* <Footer/> */}
			</BrowserRouter>

		</section>
	);
}

export default App;
