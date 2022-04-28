import axios from "axios";
import { useEffect } from "react";
import Configure from "../Configure";
import React from "react";

export async function getTopUsers() {
  let response = "";
  try {
    response = await axios
      .get("http://localhost:8000/TopUsers")
      .then((res) => res.data);
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      return error.response;
    }
  }
  return response;
}

export function GetTweetsPerMonth() {
  const [tweetspermonth, setTweetsPerMonth] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/TweetsPerMonth")
      .then((res) => res.json())
      .then((result) => {
        setTweetsPerMonth(result);
      });
  }, []);
  return tweetspermonth;
}

export async function GetDashBoard() {

  const dashBoard= await axios.get(`${Configure.backURL}admin/dashBoard`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-access-token": `${localStorage.getItem("token")}`,
    },
  });
  console.log(dashBoard);
  return dashBoard;
}
export function GetDashBoardstat() {
  const [dashBoard, setDashBoard] = React.useState([]);

  useEffect(() => {
    const fetchProduct=async ()=>{
      const dashBoard= await axios.get(`${Configure.backURL}admin/dashBoard`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setDashBoard(dashBoard.data)
      };
      fetchProduct();
  }, []);
  if (!dashBoard) return null;
  return dashBoard;
}

export function GetNumberOfUsersOfMonth() {
  const [userpermonth, setUserPerMonth] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/UsersPerMonth")
      .then((res) => res.json())
      .then((result) => {
        setUserPerMonth(result);
      });
  }, []);
  return userpermonth;
}

export function GetSignedUpMethod() {
  const [signedupmethodnumber, setSignedUpMethod] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/SignedUpMethod")
      .then((res) => res.json())
      .then((result) => {
        setSignedUpMethod(result);
      });
  }, []);
  return signedupmethodnumber;
}
export function GetAgesRange() {
  const [agesnumbers, setAgesRange] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/AgesData")
      .then((res) => res.json())
      .then((result) => {
        setAgesRange(result);
      });
  }, []);
  return agesnumbers;
}

export function GetUserList() {
  const [userlist, setUserList] = React.useState([]);

  useEffect(() => {
    fetch(`${Configure.backURL}admin/showUsers`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserList(result);
      });
  }, []);

  console.log("users", userlist);
  return userlist;
}
