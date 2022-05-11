import React, { useState } from "react";
import AdminSideBar from "../AdminSideBar";
import { BlockFormBackEnd } from "../MockRegistrationAdmin";
import TopBar from "../TopBar";
import "./blockform.css";

function BlockForm() {
  const [BlockedDaysNumber, setBlockedDaysNumber] = useState("");

  // function to update state of Blocked daysy number with
  // value enter by user in form
  const handleChange = (e) => {
    setBlockedDaysNumber(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (BlockedDaysNumber < 0) {
      alert("Please enter a validate number");
    } else {
      BlockFormBackEnd(body);
      alert("User is Blocked By : " + BlockedDaysNumber + " Days");
      e.preventDefault();
    }
  };
  var body={Blocked_Days:BlockedDaysNumber}
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
                  <form className="BlockForm"
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
                      value={BlockedDaysNumber}
                      required
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
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
