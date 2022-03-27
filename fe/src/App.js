import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navbar />} /> 
      </Routes>
    </Router>
  );  
}

export default App;
