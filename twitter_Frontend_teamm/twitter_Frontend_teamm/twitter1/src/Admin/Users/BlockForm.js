import React, { useState } from "react";
import AdminSideBar from "../AdminSideBar";
import { BlockFormBackEnd, BLockUser } from "../MockRegistrationAdmin";
import { ErrorMessage } from "@hookform/error-message";
import TopBar from "../TopBar";
import "./blockform.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

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
  // const notify = () => {
  //   toast.info("Please Enter Valid Number Of Days To Be Blocked", {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //   });
  // };
  const notify = () => {
    toast.info("Password succesfully changed", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const [test, istest] = React.useState();
  const handleSubmit = async (e) => {
    const resp = BLockUser(body);
    if (duration < 0) {
      {
        notify();

      }
    } else {
      localStorage.setItem("selectedIDs", null);
      console.log("..", resp);
      var promiseB = resp.then(function (result) {
        console.log("result", result);
        if (result === 200) {
          window.location.href = "/Users";
        }
      });

      console.log("test", test);
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
                    onSubmit={async (e) => {
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
                      onChange={async (e) => {
                        handleChange(e);
                      }}
                    />
                    <br />
                    <br />
                    <a>
                      <input type="submit" value="Submit" id="SubmitBlocking" />
                    </a>
                  </form>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default BlockForm;
