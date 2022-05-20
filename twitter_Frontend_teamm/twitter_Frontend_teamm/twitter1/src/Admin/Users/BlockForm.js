import React, { useState } from "react";
import AdminSideBar from "../AdminSideBar";
import { BlockFormBackEnd, BLockUser } from "../MockRegistrationAdmin";
import { ErrorMessage } from "@hookform/error-message";
import TopBar from "../TopBar";
import "./blockform.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/**
 *
 * this function returns a block form which you input number of days that the admin
 * make to block the user and this number must be greater than 0
 * @returns
 */

function BlockForm() {
  const [duration, setBlockedDaysNumber] = useState("");
  const navigate = useNavigate();

  // const [errorMessage, setErrorMessage] = useState('');
  // function to update state of Blocked daysy number with
  // value enter by user in form
  const handleChange = (e) => {
    setBlockedDaysNumber(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const [test, istest] = React.useState();
  const handleSubmit = (e) => {
    // if (duration < 0) {
    //   alert("please enter valid value for block days");
    //   // setErrorMessage("Please enter whole integr greater than 0")
    //   // {errorMessage && <div className="error"> {errorMessage} </div>}
    // } else {
      const resp = BLockUser(body);
      localStorage.setItem("selectedIDs", null);
      console.log("..", resp);
      var promiseB = resp.then(function (result) {
        console.log("result", result);
        istest(result);
      });
      console.log("finn", promiseB);
      if (test === 200) {
        navigate("/Users");
        console.log("test", test);
      }

      e.preventDefault(); //prevent refresh of page
    
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
