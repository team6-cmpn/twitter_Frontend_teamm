import axios from "axios";
import { useEffect } from "react";
import Configure from "../Configure";
import React from "react";
import { Dashboard } from "@material-ui/icons";

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

export async function GetDashBoard() {
  const dashBoard = await axios.get(`${Configure.backURL}admin/dashBoard`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-access-token": `${localStorage.getItem("token")}`,
    },
  });
  return dashBoard;
}
export function GetDashBoardstat() {
  const [dashBoard, setDashBoard] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const dashBoard = await axios.get(`${Configure.backURL}admin/dashBoard`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setDashBoard(dashBoard.data);
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
export function GetHashtags() {
  const [hashtag, setHashtag] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Hashtags")
      .then((res) => res.json())
      .then((result) => {
        setHashtag(result);
      });
  }, []);
  return hashtag;
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
export function GetUserListMock() {
  const [agesnumbers, setAgesRange] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/UserLists")
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
// export async function BlockFormBackEnd  (){
//   let go=false;

//   console.log(`${localStorage.getItem('emailToken')}`)
//   const body = {};

//    await axios
//      .post(`http://localhost:8000/Blocked_Days`, body,{

//        headers: {

//          'Content-Type': 'application/json',
//          'x-access-token': ` ${localStorage.getItem('emailToken')}`,

//        },

//      })
//      .then((response) => {
//        console.log("blockeddays",response);
//        if (response.status === 200) {
//          // localStorage.setItem('access token', response.data.emailtoken);
//          go=true;
//        }
//        else if (response.status=== 401){
//            go=false;
//        }
//      }).catch(error => {
//          console.log(error);

//          });
//    return go;
// };
export const BlockFormBackEnd = async (payload) => {
  try {
    const response = await axios(`http://localhost:8000/Blocked_Days`, {
      method: "post",
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export async function BLockUser(params) {
  var messgae;
  params = {
    duration: sessionStorage.getItem("duration"),
  };
  //   localStorage.getItem("id");
  await axios
    .post(
      `${Configure.backURL}adminBlock/create?userid=${localStorage.getItem(
        "selectedIDs"
      )}`,
      params,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        messgae = response.data;
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
