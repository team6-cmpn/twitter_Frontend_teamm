import axios from "axios";
import { useEffect, useState } from "react";
import Configure from "../Configure";

function GetNumUsers() {
  const [statistcs, setstatistics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/StatisticsBlock")
      .then((res) => res.json())
      .then((result) => {
        setstatistics(result[0]);
      });
  }, []);
  return [statistcs];
}

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
  const [tweetspermonth, setTweetsPerMonth] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/TweetsPerMonth")
      .then((res) => res.json())
      .then((result) => {
        setTweetsPerMonth(result);
      });
  }, []);
  return tweetspermonth;
}

export function GetAgesRanges() {
  const [agesrange, setAgesRange] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/AgesData")
      .then((res) => res.json())
      .then((result) => {
        setAgesRange(result);
      });
  }, []);
  return agesrange;
}
export function GetNumberOfUsersOfMonth() {
  const [userpermonth, setUserPerMonth] = useState([]);

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
  const [signedupmethodnumber, setSignedUpMethod] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/SignedUpMethod")
      .then((res) => res.json())
      .then((result) => {
        setSignedUpMethod(result);
      });
  }, []);
  return signedupmethodnumber;
}

export function GetUserList() {


    let response = fetch(`${Configure.backURL}admin/dashBoard`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        console.log("response gowa")
        return res.json()})
      .then((result) => {
      });
      console.log("response bara")
      console.log(response)
}

export default GetNumUsers;