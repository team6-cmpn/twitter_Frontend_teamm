import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage";
import SignUp from "./Components/SignUp/SignUp";
import React from "react";
import LogIn from "./Components/SignIn/LogIn";
import LogOut from "./Components/SignOut/LogOut";
import ForgetPassword from "./Components/SignIn/forgetPassword";
import GoogleSignUp from "./Components/SignUp/GoogleSignUp";
import Explore from "./Components/Explore";
import Home from "./Components/Home";
import Post from "./Components/onePost";
import Notifications from "./Components/Notifications";
import Settings from "./Components/Settings/Settings";
import PrivacyAndSafety from "./Components/Settings/PrivacyAndSafety";
import YourAccount from "./Components/Settings/YourAccount";
import SecurityandAcess from "./Components/Settings/SecurityAndAccess";
import MuteandBlock from "./Components/Settings/MuteandBlock";
import FinalUser from "./Admin/FinalUser";
import Statistics from "./Admin/statistics";
import BlockForm from "./Admin/Users/BlockForm";
import AdminHome from "./Admin/Home";
import Profile from "./Components/Profile/Profile";
import User from "./Components/User/User";
import Followers from "./Components/Profile/Followers";
import Following from "./Components/Profile/Following";
import AccountInformation from "./Components/Settings/AccountInfo";
import ChangeUsername from "./Components/Settings/changeUsername";
import Changepassword from "./Components/Settings/changepassword";
import DeactivateAcc from "./Components/Settings/DeactiviateAcc";
import Security from "./Components/Settings/Security";
import {
  PrivateRouteAdmin,
  PrivateRouteStat,
  PrivateRouteUSers,
} from "./Admin/PrivateRoute";
import Two_Factor from "./Components/Settings/Two-Factor";
import BlockedAccounts from "./Components/Settings/BlockedAccounts";
import Changephone from "./Components/Settings/ChangePhone";
import ChangeEmail from "./Components/Settings/ChangeEmail";
import MutedAccounts from "./Components/Settings/MutedAccounts";
function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/googlesignup" element={<GoogleSignUp />} />
          </Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Settings" element={<Settings />}>
            <Route path="change-username" element={<ChangeUsername />} />
            <Route path="change-password" element={<Changepassword />} />
            <Route path="security-and-acess" element={<SecurityandAcess />} />
            <Route path="your-account" element={<YourAccount />} />
            <Route path="privacy-and-saftey" element={<PrivacyAndSafety />} />
            <Route path="MuteandBlock" element={<MuteandBlock />} />
            <Route path="Your-twitter-data" element={<AccountInformation />} />
            <Route path="Deactivate-your-Acc" element={<DeactivateAcc />} />
            <Route path="security-of-account" element={<Security />} />
            <Route path="two-factor" element={<Two_Factor />} />
            <Route path="Blocked-accounts" element={<BlockedAccounts />} />
            <Route path="Muted-accounts" element={<MutedAccounts />} />
            <Route path="change-phone-number" element={<Changephone />} />
            <Route path="change-email" element={<ChangeEmail />} />
          </Route>
          <Route path="/adminPage" element={<AdminHome />} />
          <Route path="/Users" element={<FinalUser />} />
          <Route path="/Statistics" element={<Statistics />} />
          {/* <PrivateRouteAdmin path="/adminPage" isAuthenticated={isAuthenticated}/>
          <PrivateRouteStat path="/Statistics" isAuthenticated={isAuthenticated}/>
          <PrivateRouteUSers path="/Users" isAuthenticated={isAuthenticated}/> */}
          <Route path="/BlockForm" element={<BlockForm />} />
          <Route path="/profile" element={<Profile />}>
            {" "}
          </Route>
          <Route path="/Followers" element={<Followers />}></Route>
          <Route path="/Following" element={<Following />}></Route>
          <Route path="/:username" element={<User />} exact />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
