import router, { useState, useEffect, useCallback } from "react";
//import {useEffect} from "react";
// import {RecoilRoot} from "recoil";
//import './Home.css';
// import Sidebar from "./Sidebar/Sidebar";
// import { FaSistrix } from "react-icons/fa";
import Trends from "../Widgets/Trends";
// import FriendSuggestions from "./Widgets/FriendSuggestions/FriendSuggestions";
// import TopicItem from "./Widgets/Topics/Topics";
import { Form, Input, Button, Space } from "antd";
// import { Avatar, Button } from "@material-ui/core";
// import LikedYou from "./LikedYou";
// import FollowedYou from "./FollowedYou";
// import  * as mockAPI   from './mockSearch';
//import SettingsBox from "./SettingsBox/SettingsBox";
import "../Profile/Profile.css";
import * as BE from "./backEndSearch";
// import Post from "./homepage/Post";
//import * as mocked from "./homepage/feedmock";
import Post from "../homepage/Post";
import { RecoilRoot } from "recoil";
import { backEndTop } from "./backEndSearch";
import { backEndP } from "./backEndSearch";
import * as backend from "../homepage/backendFeed";
import FriendSuggestionItem from "../Widgets/FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem";
import { type } from "@testing-library/user-event/dist/type";
import { Tab } from "@material-ui/core";
import Configure from "../../Configure";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
//import TrendAccounts from "./Trendaccounts";

import { PoweroffOutlined } from "@ant-design/icons";
/**Explore
 * Shows explore page for the user
 *
 * @returns (Layout of explore page)
 */

function Explore() {
  const [section, setSection] = useState(1);
  const history = useNavigate();
  const [data, setData] = useState(null);
  const [item, setItem] = useState();
  const [item2 = [], setItem2] = useState();
  const [item3, setItem3] = useState();
  const [item5, setItem5] = useState();
  const [id, setID] = useState();
  const [item4 = [], setItem4] = useState();
  const [btndisabled, setbtndisabled] = useState(true);
  const [mention, setmention] = useState();
  const [user_id, setid_user] = useState([]);

  //const handleChange=(e) =>{ setState({value: e.target.value});}

  //localStorage.setItem('word', 0);
  // const handleSubmit=(e) =>{
  //   if (e.key === 'Enter') {

  //     e.preventDefault();
  //     setData(e.target.value);

  //     //console.log(data)

  //     //const promise2=BE.backEndPeople(body1);
  //     //promise2.then((text)=>{setItem4(text)});

  //     //const promise5=BE.backEndLatest(body1);
  //     //promise5.then((text)=>{setItem5(text)});
  //   }
  // }

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      return (
        //console.log("holyyyyy shitttttt")
        history("/Explor")

        // TODO redirect user to '/explore'
      );
      // <Link to="/Explore"></Link>
    }
  };

  // const handleSubmit1=(val) =>{
  //   console('A name was submitted: ' + val.target.value);
  //   //event.preventDefault();
  // }

  var sav;
  function getData(val) {
    setData(val.target.value);
    localStorage.setItem("word1", val.target.value);
    sav = val.target.value;
    console.log("savedddd", saved);
  }

  let word = localStorage.getItem("word");

  // if (word[0] == "@") {
  //   word = word.substring(1)
  // }

  // let word1 = localStorage.getItem("word1");
  // if (word1[0] == "@") {
  //   word1 = word1.substring(1)
  // }

  const [user, setusername] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tweets, showTweet] = useState([]);
  const [twetted, postedtweet] = useState([]);
  const [twette, postedtwee] = useState([]);
  const [twettes, posted] = useState([]);
  const [pe, people] = useState([]);
  const [content, getcontent] = useState([]);

  const [displayN, setDisplay] = useState([]);
  const [tweet_id, setid_tweet] = useState([]);
  const [date, setdate] = useState();
  const [disp_img, getimg] = useState([]);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  //const forceUpdate = useForceUpdate();

  // const buttonState = (changedValues, allValues) => {
  //   if ( allValues.n !== undefined &&  allValues.n !== ''  ) {

  //     setbtndisabled(false);

  //   }
  //   else{

  //     setbtndisabled(true);

  //   }
  // }

  // useEffect(() => {
  //   (async () => {
  //     const resp = await backEndP();
  //     people(resp);
  //     console.log(resp)
  //   })();
  // }, []);
  //console.log(pe)

  const p2 = BE.GetSearchedName();
  console.log("console", p2);

  const p3 = BE.GetSearchedUserName();

  const ph = BE.GetSearchedPhotos();

  const top = BE.GetSearchTop();

  console.log(p2.data);

  const usernametweet = BE.GetTweetsName();
  console.log(p2.data);

  useEffect(() => {
    (async () => {
      const resp = await backEndTop();
      posted(resp);
      console.log(posted(resp));
    })();
  }, []);
  console.log(tweets);
  // useEffect(() => {
  //   (async () => {
  //     const resp = await backEndP();
  //     people(resp);
  //   })();
  // }, []);

  //backEndP();
  // console.log(people(resp));
  // console.log(resp);

  // useEffect(()=>{
  //   ( () => {
  //       BE.getUserLook();
  //     })();

  //   },[])
  BE.getUserLook();

  // setTimeout(() => {
  //   setLoading(false);
  //   }, 2000);
  // const [filteredResults, setFilteredResults] = useState([]);

  const buttonState = (changedValues, allValues) => {
    if (allValues.n !== undefined && allValues.n !== "") {
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
  };

  // function fun() {
  //   //const promise2=BE.backEndLatest(body1);
  //   //promise2.then((text)=>{setItem5(text)});

  //   //const promise3 = BE.backEndPeople(body1);
  //   //promise3.then((text) => { setItem2(text) });
  //   p2 = BE.GetSearchedName();
  //   //onst promise4=BE.backEndUsername(body1);
  //   //promise4.then((text)=>{setItem2(text)});
  // }
  // const p3 = BE.GetSearched(body1);
  //console.log("triallllllll", p3)

  var resp;

  function fun() {
    //console.log("helloooooooooo", body1);
    //const p2 = BE.GetSearchedName(body1);
    //console.log(p2.data);
    //const promise2 = BE.backEndLatest(body1);
    //promise2.then((text) => { setItem5(text) });
    //resp = backEndTop(body1);
    //console.log("offfffff",resp)
    // (async () => {
    //   const resp = await backEndTop(body1);
    //   posted(resp);
    //   console.log(resp)
    // })();
    // var searcheduse = p3.data?.user[1];
    // console.log(p3.data);
    // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    // return(
    //   <article>
    //  {searcheduse?.map((userlist, index) => (
    // <FriendSuggestionItem
    //   key={index}
    //   props={userlist}
    // //displayName={localStorage.getItem(`people ${index}`)}
    // />))}
    // </article>
    // )
    // ghehehddhjd
    // console.log("ffffff")
  }

  function funn() {
    console.log(data);
    //const promise6 = BE.backEndPeople(body1);
    //promise6.then((text) => { setItem2(text) });
    //console.log(item2)
  }

  // var d = data.toString();
  // if(typeof data === 'string')
  // {
  //   console.log(data[0]);
  // }else{
  //   console.log('str is not a string');
  // }

  if (word) {
    //console.log(word)
    localStorage.setItem("searchData", word);
    var body = {
      data: word,
    };
  }
  // else if (word1) {
  //   //console.log(word)
  //   localStorage.setItem("searchData", word1)
  //   var body = {
  //     data: word1

  //   }
  // }

  // if(dataa)
  //   {
  //   //console.log(word)
  //   localStorage.setItem("searchData",dataa)
  //   var bod={
  //     data:dataa

  //   }
  // }

  // if (data) {
  //   //console.log(data[0])
  //   localStorage.setItem("searchData", data)

  //   var body1 = {
  //     data: data

  //   }
  // }
  //console.log(body)

  if (word[0] === "@") {
    const promise2 = BE.backEndUsername(body);
    promise2.then((text) => {
      setItem2(text);
    });
    //console.log(item2);
  }

  // useEffect(() => {
  //   (() => {
  //     if (word) {
  //       const promise3 = BE.backEndPeople(body);
  //       promise3.then((text) => { setItem2(text) });

  //     }
  //   })();

  // }, [])

  if (data && data[0] === "@") {
    const promise2 = BE.backEndUsername(body);
    promise2.then((text) => {
      setItem2(text);
    });
    //console.log(item2);
  }

  localStorage.setItem("ID", id);
  var body2 = {
    id: id,
  };

  function saved() {
    //BE.backEndTop(body);
    // const promise=BE.Put_SaveUser();
    // //console.log(localStorage.getItem("ite"))
    // promise.then((text)=>{setItem(text)});
  }
  function go() {
    // BE.getUserLook();
    // console.log(localStorage.getItem("ite"))
  }
  function savedSearch() {
    // const promise3=BE.backEndSavedSearch(body);
    // promise3.then((text)=>{setItem5(text)});
    // console.log(item5);
  }

  //const promise=BE.Put_SaveUser();
  //console.log(localStorage.getItem("ite"))
  //promise.then((text)=>{setItem(text)});
  //const promise3=BE.backEndSavedSearch(body);
  //promise3.then((text)=>{setItem3(text)});
  //console.log(item3);

  // function searchpeople()
  // {
  //   if(data)
  //   {
  //   const promise2=BE.backEndPeople(body);
  //   promise2.then((text)=>{setItem2(text)});
  //   console.log(item2);
  //   }

  function saveUser() {
    const promise = BE.Put_SaveUser();
    //BE.backEndTop(body);
    //if(promise.status === 200 )
    //{
    console.log("shitttttttt on meee", promise);
    //promise.then((text)=>{setItem(text)});
    //}
    //console.log(localStorage.getItem("ite"))
  }

  console.log(localStorage.getItem("people"));
  if (p2.status === 200 && word[0] !== "@") {
    var searcheduser = p2.data?.user[1];
    console.log("user", searcheduser);
  }

  if (p3.status === 200 && word[0] === "@") {
    var searchedusername = p3.data?.usernames[1];
    console.log("user", searchedusername);
  }

  var farah;
  if (top.status === 200 && word[0] !== "@") {
    var searchedtop = top.data?.tweets;
    farah = localStorage.getItem("userridd");
    console.log(searchedtop);
  }

  if (top.status === 200 && word[0] === "@") {
    var m = top.data?.mentions;
    console.log("hiiiiiiiihhh", top.data);
  }

  if (ph.status === 200 && word[0] !== "@") {
    var photos = ph.data?.tweets;
    console.log("goooo yala", ph.data?.tweets[0].imageUrl.length);
    console.log("hiiiiiiiihhh", top.data);
  }

  //console.log(info);
  const userinfo = backend.GetUserInfo();
  const [test, istest] = useState();
  const user1 = backend.GetUserInfo(localStorage.getItem("idd"));
  user1.then(function (result) {
    // console.log("result", result);
    istest(result);
  });
  var Url_avatar = [];

  return (
    <div>
      <Sidebar />

      {/* <SearchInput  placeholder="Search Twitter" /> */}
      <div className="Expmenu">
        {/* onKeyPress={handleSubmit} */}
        <Form>
          <Form.Item name="n">
            <input
              onChange={getData}
              onKeyPress={handleSubmit.bind(this)}
              id="search"
              className="trend__contr "
              type="text"
              placeholder="Search Twitter"
            ></input>
          </Form.Item>
        </Form>
        {/* <button onClick={searchpeople}>search people</button> */}
        {/* <button onClick={fun} >search</button>   */}
        {/* <button onClick={savedSearch}>saved Search</button>   <button onClick={() => go}>names</button> */}
        {/* <FaSistrix className="trend s" /> */}
        {/* <div><button style={{ "cursor": "pointer" }} id="searchbutton" onClick={funn}
          type="button">Search name</button></div> */}

        {p2.status === 200 || p3.status === 200 ? (
          <Button type="primary" onClick={saveUser}>
            SAVE USER
          </Button>
        ) : (
          <Button type="primary" loading>
            {" "}
            Loading{" "}
          </Button>
        )}

        <div className="notificationsCategory">
          <div
            className={section === 1 && "notificationActive"}
            onClick={() => setSection(1)}
          >
            <span>Top</span>
          </div>
          <div
            className={section === 2 && "notificationActive"}
            onClick={() => setSection(2)}
          >
            <span>Latest</span>
          </div>
          <div
            className={section === 3 && "notificationActive"}
            onClick={() => setSection(3)}
          >
            <span>People</span>
          </div>
          <div
            className={section === 4 && "notificationActive"}
            onClick={() => setSection(4)}
          >
            <span>Photos</span>
          </div>
        </div>

        <div>
          <RecoilRoot>
            {section === 1 && (data || word || word === "@") ? (
              //Tabs()
              <>
                <>
                  {/* {p.map((userlist, index) => ( 
           <FriendSuggestionItem 
              key={index}
              username= {localStorage.getItem(`people ${index}`)}
              //displayName={item2[0]}
            />))} */}
                  {/* { (item4) ?
           <>
           <FriendSuggestionItem 
              username= {item4[1]}
              displayName={item4[0]}
            />
           </>     
           : (item2) ?
           <>
           <FriendSuggestionItem 
              username= {item2[1]}
              displayName={item2[0]}
            />
           </> 
           :
           <></>
           
           
           } */}

                  {/* <Post
                        text={item5}
                      /> */}

                  <>
                    {/* { 
                      <article>
                        {searchedtop?.map((userlist, index) => (
                          <Post
                            key={index}
                            //props={userlist}
                            displayName={localStorage.getItem(`nametweet ${index}`)}
                            username={localStorage.getItem(`usernametweet ${index}`)}
                            text={userlist.text}
                            date={userlist.created_at}
                            user_tweeted_id={userlist._id}
                            avatar = {`${Configure.backURL}${Url_avatar}`}
                            logedin_user_id={localStorage.getItem("userId")}
                          //displayName={userlist.user}

                          />))}
                      </article>
                     } */}
                    {ph.data?.tweets[0].imageUrl.length === 1 ||
                    ph.data?.tweets[0].imageUrl.length === 2 ? (
                      <>
                        <article>
                          {photos?.map((userlist, index) => (
                            <Post
                              key={index}
                              //props={userlist}
                              displayName={localStorage.getItem(
                                `nametweet ${index}`
                              )}
                              username={localStorage.getItem(
                                `usernametweet ${index}`
                              )}
                              tweet_id={userlist._id}
                              user_tweeted_id={userlist.user}
                              text={userlist.text}
                              date={userlist.created_at}
                              user_id={localStorage.getItem("userId")}
                              image={userlist.imageUrl}
                              logedin_user_id={localStorage.getItem("userId")}
                              //displayName={userlist.user}
                            />
                          ))}
                        </article>
                      </>
                    ) : (
                      <>
                        <article>
                          {searchedtop?.map((userlist, index) => (
                            <Post
                              key={index}
                              //props={userlist}
                              displayName={localStorage.getItem(
                                `nametweet ${index}`
                              )}
                              username={localStorage.getItem(
                                `usernametweet ${index}`
                              )}
                              tweet_id={userlist._id}
                              user_tweeted_id={userlist.user}
                              logedin_user_id={localStorage.getItem("userId")}
                              text={userlist.text}
                              date={userlist.created_at}

                              //displayName={userlist.user}
                            />
                          ))}
                        </article>
                      </>
                    )}
                    <article>
                      {m?.map((userlist, index) => (
                        <Post
                          key={index}
                          //props={userlist}
                          displayName={localStorage.getItem(
                            `nametweet ${index}`
                          )}
                          username={localStorage.getItem(
                            `usernametweet ${index}`
                          )}
                          text={userlist.text}
                          tweet_id={userlist._id}
                          user_tweeted_id={userlist.user}
                          logedin_user_id={localStorage.getItem("userId")}
                          date={userlist.created_at}
                          user_id={localStorage.getItem("userId")}
                          mention={userlist.mention}
                          avatar={`${Configure.backURL}${Url_avatar}`}
                          image={userlist.imageUrl}
                          //displayName={userlist.user}
                        />
                      ))}
                    </article>
                    <article>
                      {searcheduser?.map((userlist, index) => (
                        <FriendSuggestionItem
                          key={index}
                          props={userlist}
                          //displayName={localStorage.getItem(`people ${index}`)}
                        />
                      ))}
                    </article>
                    <article>
                      {searchedusername?.map((userlist, index) => (
                        <FriendSuggestionItem
                          key={index}
                          props={userlist}
                          //displayName={localStorage.getItem(`people ${index}`)}
                        />
                      ))}
                    </article>
                  </>
                </>
              </>
            ) : section === 2 ? (
              //console.log("hello")
              <>
                <article>
                  {searchedtop?.map((userlist, index) => (
                    <Post
                      key={index}
                      //props={userlist}
                      displayName={localStorage.getItem(`nametweet ${index}`)}
                      username={localStorage.getItem(`usernametweet ${index}`)}
                      text={userlist.text}
                      date={userlist.created_at}
                      tweet_id={userlist._id}
                      user_tweeted_id={userlist.user}
                      logedin_user_id={localStorage.getItem("userId")}
                      user_id={localStorage.getItem("userId")}
                      //displayName={userlist.user}
                    />
                  ))}
                </article>

                {/* <TrendAccounts 
                        username={item2[1]}
                        name={item2[0]}
                      /> 
                    <Post
                      //key={index}
                      //displayName={localStorage.getItem(`ite ${index}`)}
                      //username={localStorage.getItem(`ite ${index}`)}
                      text={item5}

                    /> */}
                {/* {twetted.map((userlist, index) => (
                                 <Post
                                 key={index}
                                 displayName={userlist.displayName}
                                 username={userlist.username}
                                 text={userlist.text}
                                 image={userlist.image}
                                 avatar={userlist.avatar}
                                 date={userlist.date}
                                 />))} */}
              </>
            ) : section === 3 ? (
              <>
                <article>
                  {searcheduser?.map((userlist, index) => (
                    <FriendSuggestionItem
                      key={index}
                      props={userlist}
                      //displayName={localStorage.getItem(`people ${index}`)}
                    />
                  ))}
                </article>
                <article>
                  {searchedusername?.map((userlist, index) => (
                    <FriendSuggestionItem
                      key={index}
                      props={userlist}
                      //displayName={localStorage.getItem(`people ${index}`)}
                    />
                  ))}
                </article>
                {/* <TrendAccounts
                    name={item2[0]}
                    username={item2[1]}
                  /> */}

                {/* <article>
                        {searchedusername?.map((userlist, index) => (
                          <FriendSuggestionItem 
                            key={index}
                            //props={userlist}
                            props={userlist}
                          />))}
                      </article> */}
              </>
            ) : (
              <>
                <article>
                  {photos?.map((userlist, index) => (
                    <Post
                      key={index}
                      //props={userlist}
                      displayName={localStorage.getItem(`nametweet ${index}`)}
                      username={localStorage.getItem(`usernametweet ${index}`)}
                      text={userlist.text}
                      date={userlist.created_at}
                      tweet_id={userlist._id}
                      user_tweeted_id={userlist.user}
                      logedin_user_id={localStorage.getItem("userId")}
                      user_id={localStorage.getItem("userId")}
                      image={userlist.imageUrl}
                      //displayName={userlist.user}
                    />
                  ))}
                </article>
              </>
            )}

            {/* (
             // Tabs()
             console.log(item)
             
            //console.log("offf")
            
            )//:(console.log("yaa")) */}
          </RecoilRoot>
        </div>
      </div>

      <Trends />
    </div>
  );
}
export default Explore;
