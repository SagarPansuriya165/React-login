import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import EventsCalendar from './pages/EventsCalendar';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ForgotPassword from './pages/ForGatepass';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/eventsCalendar" element={<EventsCalendar />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
      {/* </BrowserRouter> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
