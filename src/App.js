import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages';
import Pillars from './pages/menu1.js';
import About from './pages/menu2.js';
import FAQ from './pages/menu3.js';
import Terms from './pages/terms.js';

function App() {
	return (
		<div class="background">
			<HashRouter hashType={'noslash'}>
				<Navbar />
				<Routes>
					<Route path="" exact element={<Home />} />
					<Route path="/download" exact element={<Home to={'download'} />} />
					<Route path="/socialsTab" exact element={<Home to={'socialsTab'} />} />
					<Route path="pillars" element={<Pillars />} />
					<Route path="about" element={<About />} />
					<Route path="faq" element={<FAQ />} />
					<Route path="terms" element={<Terms to={'terms'} />} />
					<Route path="privacy" element={<Terms to={'privacy'} />} />
					<Route path="copyright" element={<Terms to={'copyright'} />} />
				</Routes>
				<Footer />
			</HashRouter>
		</div>
	);
}

export default App;
