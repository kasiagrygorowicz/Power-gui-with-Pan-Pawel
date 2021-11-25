import "./App.css";
import { Route, Routes } from "react-router-dom";
import  Dashboard from './pages/Dashboard'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
// import * as ReactBootstrap from 'react-bootstrap'


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    {/* <ReactBootstrap.Button>Witaj</ReactBootstrap.Button> */}
    </div>
  );
}

export default App;
