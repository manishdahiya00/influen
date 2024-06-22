
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import Influencer from "./components/Influencer.jsx";
import Brand from "./components/Brand.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (

        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/influencer" element={<Influencer />} />
                <Route path="/register/brand" element={<Brand />} />
            </Routes>
        </Router>

    )
        ;
}

export default App;
