import './StartPage.css';
import startPageImage from "./start.png"
import googleIcon from "./googleIcon.png"
import twitterBirdImage from "./bird.png"
import GoogleLogin from 'react-google-login';
import {Link, Outlet,useNavigate } from "react-router-dom";
import React from "react";
import "antd/dist/antd.css";
import  * as mockAPI   from './mockRegistration';




function StartPage(props){
  const navigate= useNavigate();

  function logInFailure (response) {
    console.log(response);
    alert('Failed Login');
  }

  function logInSuccess (response) {
    console.log('Login Success: currentUser:', response.profileObj);
    var body={
      profile:response.profileObj
    }
    mockAPI.googleProfilePost(body);
    // alert(`Logged in successfully welcome ${response.profileObj.name}. \n See console for full profile object.`);
    navigate ("/googlesignup");
  }

 

  return (
     
    <div className="flex-container">
      <div className="column"><img alt='' src={startPageImage}/></div>

        <div className="column">
          <img className="bird" alt='' src={twitterBirdImage} />
          <h1 className="textHeader">Happening now</h1>
          <span className="textBody">Join Twitter today.</span>

          <div className="row">
            <GoogleLogin
              clientId="335712697506-0rdelma7j4jgcc6bicuhnn20e2l8m0fm.apps.googleusercontent.com"
              render={renderProps =>(<button onClick={renderProps.onClick} disabled={renderProps.disabled} className="button">
              <img className="icon" alt='' src={googleIcon} />
              <span>Sign up with Google</span>
              </button> 
              )}
              buttonText="Login"
              onSuccess={logInSuccess}
              onFailure={logInFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>

          <div className='row'>
            <div className="flex-parent">
              <div className="flex-child-edge" />
              <div className="flex-child-text textBody_font">or</div>
              <div className="flex-child-edge" />
            </div>
          
            <div className='row'>
              <Link className="button btn-color"  to="/signup"><span>Sign up with phone or email</span></Link><Outlet />
            </div>
          
            <br/>
          
            <div className='row'><span className='textBody_margin'>Already have an account?</span></div>

            <div className='row'>
              <Link  className="button changebtncolor" to="/login"><span>Sign in</span> </Link>
            </div>
          
          </div>
        </div>
    </div>
  );
}

export default StartPage;