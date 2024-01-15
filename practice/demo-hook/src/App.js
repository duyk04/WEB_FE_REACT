import { BowserRouter, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css';
import NavHeader from './Components/NavHeader';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Gioithieu from './Components/Gioithieu';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavHeader />
				<Routes>
					<Route path='/' element={<Home/>}></Route>
					<Route path='/Home' element={<Home/>}></Route>
					<Route path='/Gioithieu' element={<Gioithieu/>}></Route>
					<Route path='/Contact' element={<Contact/>}></Route>
					<Route path='*' element={<NotFound/>}></Route>
				</Routes>

				{/* <Home /> */}
				<Footer />
			</BrowserRouter>

		</>


	);
}

export default App;
