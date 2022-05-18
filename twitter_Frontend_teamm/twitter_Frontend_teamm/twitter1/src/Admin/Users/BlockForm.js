import React, { useState } from "react";
import AdminSideBar from "../AdminSideBar";
import { BlockFormBackEnd, BLockUser } from "../MockRegistrationAdmin";
import { ErrorMessage } from '@hookform/error-message';
import TopBar from "../TopBar";
import "./blockform.css";
/**
 * 
 * this function returns a block form which you input number of days that the admin
 * make to block the user and this number must be greater than 0
 * @returns 
 */

function BlockForm() {
  const [duration, setBlockedDaysNumber] = useState("");
  // const [errorMessage, setErrorMessage] = useState('');
  // function to update state of Blocked daysy number with
  // value enter by user in form
  const handleChange = (e) => {
    setBlockedDaysNumber(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (duration < 0) {
      alert("please enter valid value for block days")
      // setErrorMessage("Please enter whole integr greater than 0")
      // {errorMessage && <div className="error"> {errorMessage} </div>}
    } else {
      var resp = BLockUser(body);
      console.log(resp);
      localStorage.setItem("selectedIDs", null);
      // window.location.href = 'http://www.google.com'
      for (let i = 0; i < 1000; i++) {
        if(resp.status===200)
        {
          window.location.href="Users"
          console.log("test")
        }
      } 

      e.preventDefault(); //prevent refresh of page
    }
  };
  var body = { duration: duration };
  sessionStorage.setItem("duration", duration);
  return (
    <div>
      <div id="FinalUsersPage">
        <TopBar />
        <div className="admincontainer">
          <AdminSideBar />
          <div className="BlockForm_Widget">
            <div className="UserWidget">
              <div className="BlockForm">
                <header className="BlockForm-header">
                  <form
                    className="Block_Form"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <h2>Block Form</h2>
                    <label>Number Of Days:</label>
                    <br />
                    <br />
                    <input
                      type="number"
                      value={duration}
                      required
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <br />
                    <br />
                    <a>
                      <input type="submit" value="Submit" />
                    </a>
                  </form>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockForm;
