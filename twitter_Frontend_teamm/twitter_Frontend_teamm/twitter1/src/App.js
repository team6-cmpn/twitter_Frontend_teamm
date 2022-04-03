import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Components/StartPage';
import SignUp from './Components/SignUp';
import React from 'react';
import LogIn from './Components/LogIn';
import ForgetPassword from './Components/forgetPassword';
import GoogleSignUp from './Components/GoogleSignUp';
import Explore from "./Components/Explore";
import Home from "./Components/Home";



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />}>
            <Route path="/signup" element={<SignUp  />}/> 
            <Route path="/googlesignup" element={<GoogleSignUp />}/>
          </Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;