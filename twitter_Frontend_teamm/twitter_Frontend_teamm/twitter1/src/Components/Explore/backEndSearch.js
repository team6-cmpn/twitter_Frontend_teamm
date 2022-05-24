import axios from "axios";
import Configure from "../../Configure";
import React, { useEffect } from "react";
/**
 *Search top BE Integration
 *
 *get search top data from BE server
 *
 * @returns {string} -message from BE
 */


var userridd = [];

export function GetSearchTop() {
  const [searched, setSearched] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const search = await axios.get(
        `${Configure.backURL}search/top?text=${localStorage.getItem(
          "searchData"
        )}`,
        {
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        }
      );
      setSearched(search);
      
      for (let i = 0; i < search.data.tweets.length; i++) {
        console.log("farahhhhhhhhhhhhh", search.data.tweets[i].user);
        userridd += search.data.tweets[i].user + ",";
        localStorage.setItem(`userridd ${i}`, search.data.tweets[i].user);
        // localStorage.setItem('idd',search.data.tweets[i].user)
      }
      userridd = userridd.slice(0, -1);
    };
    fetchProduct();
  }, []);
  if (!searched) return null;
  return searched;
}


/**
 *Search lookup BE Integration
 *
 *get search name and username top data from BE server
 *
 * @returns {string} -message from BE
 */
export async function getUserLook() {
  var userInfo = [];
  await axios
    .get(`${Configure.backURL}user/lookup/${userridd}`, {
      headers: {
        "Content-Type": "application/json; charset=ut-8",
        "x-access-token": `${sessionStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      //console.log(response);
      if (response.status === 200) {
        for (let i = 0; i < response.data.user.length; i++) {
          userInfo += response.data?.user[i]?.name + ",";
          localStorage.setItem(
            `usernametweet ${i}`,
            response.data.user[i].username
          );
          localStorage.setItem(`nametweet ${i}`, response.data.user[i].name);
          localStorage.setItem(`imageusertweet ${i}`, response.data.user[i].profile_image_url);
        }
        userInfo = userInfo.slice(0, -1);
        console.log(userInfo);
      }
    })

    .catch((error) => {
      userInfo = error.response.data.message;
    });

  return userInfo;
}


export function GetLookUp() {
  const [dashBoard, setDashBoard] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const dashBoard = await axios.get(`${Configure.backURL}user/lookup/${userridd}`, {
        headers: {
          "Content-Type": "application/json; charset=ut-8",
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      });
      setDashBoard(dashBoard.data);
    };
    fetchProduct();
  }, []);
  
  if (!dashBoard) return null;
  console.log("dashboard", dashBoard);
  return dashBoard;
}



export function GetTweetsName() {
  const [searched, setSearched] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const search = await axios.get(
        `${Configure.backURL}user/lookup/${userridd}`,
        {
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        }
      );
      setSearched(search);
    };
    fetchProduct();
  }, []);
  if (!searched) return null;
  return searched;
}



/**
 *Search people BE Integration
 *
 *get search people data from BE server
 *
 * @returns {string} -message from BE
 */



export async function backEndP() {
  const body = {};
  var message;

  var people = [];
  var message1;
  //console.log(localStorage.getItem("searchData"))
  await axios
    .get(
      `${Configure.backURL}search/people?text=${localStorage.getItem(
        "searchData"
      )}`,
      {
        headers: {
          "Content-Type": "application/json; charset=ut-8",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
     
      if (response.status === 200) {
        message = response.data.user;
        people = people.slice(0, -1);
        console.log(message);
      
      }

      
    })
    .catch((error) => {
     
    });
  return message;
}


export function GetSearchedName() {
  const [searched, setSearched] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const search = await axios.get(
        `${Configure.backURL}search/people?text=${localStorage.getItem(
          "searchData"
        )}`,
        {
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        }
      );
      setSearched(search);
      localStorage.setItem("us", search.data.user[1][0]._id);
    };
    fetchProduct();
  }, []);
  if (!searched) return null;
  return searched;
}

export function GetSearchedUserName() {
  const [searched, setSearched] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const search = await axios.get(
        `${Configure.backURL}search/people?text=${localStorage.getItem(
          "searchData"
        )}`,
        {
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        }
      );
      setSearched(search);
      localStorage.setItem("us", search.data.usernames[1][0]._id);
    };
    fetchProduct();
  }, []);
  if (!searched) return null;
  return searched;
}

export function GetSearched() {
  const [searched, setSearched] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const search = await axios.get(
        `${Configure.backURL}search/people?text=${localStorage.getItem(
          "searchData"
        )}`,
        {
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        }
      );
      setSearched(search);
    };
    fetchProduct();
  }, []);
  if (!searched) return null;
  return searched;
}

export async function backEndUsername() {
  var message = [];

  
  await axios
    .get(
      `${Configure.backURL}search/people?text=${localStorage.getItem(
        "searchData"
      )}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      }
    )

    .then((response) => {
      //console.log(response);
      if (response.status === 200) {
        message[0] = response.data.usernames[1][0].name;
        message[1] = response.data.usernames[1][0].username;
        console.log(message);
      } else if (response.status === 404) {
        console.log(message);
      }
    })
    .catch((error) => {
      message = error.response.data.message;
      console.log(message);
    });
  return message;
}

/**
 *search latest BE Integration
 *
 * get search latest data from BE server
 *
 * @returns {string} -message from BE
 */

export async function backEndLatest() {
  const body = {};
  var message;

  await axios
    .get(
      `${Configure.backURL}search/latest/?text=${localStorage.getItem(
        "searchData"
      )}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      }
    )

    .then((response) => {
      //console.log(response);
      if (response.status === 200) {
        message = response.data.tweets[0].text;
        //console.log(message);
      } else if (response.status === 404) {
        //console.log(message);
      }
    })
    .catch((error) => {
      message = error.response.data.message;
      // console.log(message);
    });
  return message;
}

/**
 *Search photos BE Integration
 *
 *get search photos data from BE server
 *
 * @returns {string} -message from BE
 */

export function GetSearchedPhotos() {
  const [searched, setSearched] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const search = await axios.get(
        `${Configure.backURL}search/photos?text=${localStorage.getItem(
          "searchData"
        )}`,
        {
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        }
      );
      setSearched(search);
    };
    fetchProduct();
  }, []);
  if (!searched) return null;
  return searched;
}


/**
 *save seached user BE Integration
 *
 *put searched user in BE server
 *
 * @returns {string} -message from BE
 */
export async function Put_SaveUser() {
  var message;
  var id = localStorage.getItem("us");
  
  const body = {};

  await axios
    .put(`${Configure.backURL}search/saveUser/${id}`, body, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      //console.log(response);
      if (response.status === 200) {
        message = "";
      } else if (response.status === 403) {
        message = "  ";
        //  console.log(response.data.message);
      } else if (response.status === 401) {
        message = response.data.message;
      }
    })
    .catch((error) => {
      // console.log(error);
    });
  return message;
}

/**
 *remove user BE Integration
 *
 *delete user data from BE server
 *
 * @returns {string} -message from BE
 */
export async function Delete_SaveUser() {
  var message;
  var id = localStorage.getItem("ID");
  const body = {};
  // console.log(`${localStorage.getItem('token')}`)
  await axios
    .put(`${Configure.backURL}search/deleteSaved/${id}`, body, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      //  console.log(response);
      if (response.status === 200) {
        message = "";
      } else if (response.status === 403) {
        message = "  ";
        // console.log(response.data.message);
      } else if (response.status === 401) {
        message = response.data.message;
      }
    })
    .catch((error) => {
      // console.log(error);
    });
  return message;
}




/**
 *Saved search BE Integration
 *
 *get saved data from BE server
 *
 * @returns {string} -message from BE
 */
export function SavedSearch() {
  const [searched, setSearched] = React.useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const search = await axios.get(`${Configure.backURL}search/getsaved`, {
        headers: {
          "Content-Type": "application/json; charset=ut-8",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setSearched(search);
    };
    fetchProduct();
  }, []);
  if (!searched) return null;
  return searched;
}
