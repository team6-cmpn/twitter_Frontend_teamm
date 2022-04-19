import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Components/StartPage/StartPage';
import SignUp from './Components/SignUp/SignUp';
import React from 'react';
import LogIn from './Components/SignIn/LogIn';
import ForgetPassword from './Components/SignIn/forgetPassword';
import GoogleSignUp from './Components/SignUp/GoogleSignUp';
import Explore from "./Components/Explore";
import Home from "./Components/Home";
import Notifications from './Components/Notifications';
import  Settings  from './Components/Settings/Settings';
import PrivacyAndSafety from './Components/Settings/PrivacyAndSafety';
import YourAccount from './Components/Settings/YourAccount';
import SecurityandAcess from './Components/Settings/SecurityAndAccess';
import MuteandBlock from './Components/Settings/MuteandBlock';



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
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Settings" element={<Settings />}>
            <Route path="security-and-acess" element={<SecurityandAcess />}/>
            <Route path="your-account" element={<YourAccount />}/>
            <Route path="privacy-and-saftey" element={<PrivacyAndSafety />}/>
            <Route path= "MuteandBlock" element ={<MuteandBlock/>}/>

          </Route>


          
        </Routes>
      </div>
    </Router>
  );
}
export default App;