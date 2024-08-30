import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import FitbitApiTest from './pages/FitbitTest';

const App = () => {
  return (
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/fitbit-test" element={<FitbitApiTest />} />
				</Routes>
				<Footer />
			</Router>
		);
}

export default App;
