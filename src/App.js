import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import PrivateRoute from "./pages/PrivateRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Stats from "./components/Stats";
import Create from "./components/Create";
import List from "./components/List";


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
                  <Route path="stats" element={<Stats />} />
                  <Route path="create" element={<Create />} />
                  <Route path="list" element={<List />} />
              </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;