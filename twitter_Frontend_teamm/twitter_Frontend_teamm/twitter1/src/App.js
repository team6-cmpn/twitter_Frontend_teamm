import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage";
import SignUp from "./Components/SignUp/SignUp";
import React, { useContext } from "react";
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
import MuteandBlock from "./Components/Settings/MuteandBlock";
import FinalUser from "./Admin/FinalUser";
import Statistics from "./Admin/statistics";
import BlockForm from "./Admin/Users/BlockForm";
import AdminHome from "./Admin/Home";
import Profile from "./Components/Profile/Profile";
import User from "./Components/User/User";
import Followers from "./Components/Profile/Followers";
import Following from "./Components/Profile/Following";
import UserFollowers from "./Components/User/UserFollowers";
import UserFollowing from "./Components/User/UserFollowing";
import AccountInformation from "./Components/Settings/AccountInfo";
import ChangeUsername from "./Components/Settings/changeUsername";
import Changepassword from "./Components/Settings/changepassword";
import DeactivateAcc from "./Components/Settings/DeactiviateAcc";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import BlockedAccounts from "./Components/Settings/BlockedAccounts";
import Changephone from "./Components/Settings/ChangePhone";
import ChangeEmail from "./Components/Settings/ChangeEmail";
import MutedAccounts from "./Components/Settings/MutedAccounts";
import './Components/darkmode.css'
import { ThemeContext } from "./ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  //const {darkMode}=useContext(DarkModeContext)
  const privateUser=localStorage.getItem('userId');
  //console.log(privateUser)
  const authenticate=()=>{
    console.log()
    if (privateUser){

      return "/home"
    }else{

      return "/"
    }
  }
  return (
    <Router>
      <div className={theme.state.darkMode ?"App dark":"App"}>
        <Routes>
          {!privateUser && <>
          <Route path="/" element={<StartPage />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/googlesignup" element={<GoogleSignUp />} />
          </Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          </>}

          {privateUser && <>
            <Route path="/logout" element={<LogOut />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Settings" element={<Settings />}>
              <Route path="change-username" element={<ChangeUsername />} />
              <Route path="change-password" element={<Changepassword />} />
              <Route path="your-account" element={<YourAccount />} />
              <Route path="privacy-and-saftey" element={<PrivacyAndSafety />} />
              <Route path="MuteandBlock" element={<MuteandBlock />} />
              <Route path="Your-twitter-data" element={<AccountInformation />} />
              <Route path="Deactivate-your-Acc" element={<DeactivateAcc />} />
              <Route path="Blocked-accounts" element={<BlockedAccounts />} />
              <Route path="Muted-accounts" element={<MutedAccounts />} />
              <Route path="change-phone-number" element={<Changephone />} />
              <Route path="change-email" element={<ChangeEmail />} />
            </Route>
            {localStorage.getItem("userId") === "62841b870bd3ff9a040987c5" ? (
              <>
                <Route path="/adminPage" element={<AdminHome />} />
                <Route path="/Users" element={<FinalUser />} />
                <Route path="/Statistics" element={<Statistics />} />
                <Route path="/BlockForm" element={<BlockForm />} />
              </>
            ) : null}

            <Route path="/profile" element={<Profile />}>
              {" "}
            </Route>
            <Route path="/Followers" element={<Followers />}></Route>
            <Route path="/Following" element={<Following />}></Route>
            <Route path="/UserFollowers" element={<UserFollowers />}></Route>
            <Route path="/UserFollowing" element={<UserFollowing />}></Route>
            {/* <Route path="/:username" element={<User />} /> */}
            {/* <Route path="/profile/:username" element={<User />} /> */}
            {/* <Route path="User/:username" element={<User />} exact />  */}
            <Route path="/bookmarks" element={<Bookmarks />} />
            </>}
            <Route path="/:username" element={<User />} exact /> 
          <Route path="/" element={<Navigate to={authenticate()}/>}/>
          <Route path="*" element={<Navigate to={'/'}/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
