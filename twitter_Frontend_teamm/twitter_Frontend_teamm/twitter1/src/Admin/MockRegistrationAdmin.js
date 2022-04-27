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

export function GetDashBoard() {
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
// function Trial() {
//   const [product, setProduct] = React.useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const product = await axios.get(`/api/products`);
//       setProduct(product.data);
//     };

//     fetchProduct();
//   }, []);

//   // render nothing during the time product is loading
//   if (!product) return null;

//   return <>render product</>;
// }
export function GetDashBoardTry() {
  const [dashBoard, setDashBoard] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${Configure.backURL}admin/dashBoard`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      const dashBoard = await data.json();
      setDashBoard(dashBoard);
    };

    fetchData();

    return dashBoard;
  });
}

// export function GetDashBoard() {
//   const [dashBoard, setDashBoard] = React.useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//     const data = await fetch(`${Configure.backURL}admin/dashBoard`, {
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//         "x-access-token": `${localStorage.getItem("token")}`,
//       }

// const dashBoard = await data.json();
// setDashBoard(dashBoard);
//     return dashBoard;
//       });
// }
// })
// }

// export function GetDashBoard() {
//   const [dashBoard, setDashBoard] = React.useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//     const data = await fetch(`${Configure.backURL}admin/dashBoard`, {
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//         "x-access-token": `${localStorage.getItem("token")}`,
//       },
//     });
// const dashBoard = await data.json();
// setDashBoard(dashBoard);
//     return dashBoard;
// }
// })
// }
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
