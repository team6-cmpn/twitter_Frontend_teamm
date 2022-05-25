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
  const [id, setID] = useState();
  

  

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      return (
        
        history("/Explor")

        
      );
      
    }
  };

 

  var sav;
  function getData(val) {
    setData(val.target.value);
    localStorage.setItem("word1", val.target.value);
 
    
  }

  let word = localStorage.getItem("word");

  

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

 

  const p2 = BE.GetSearchedName();
  console.log("console", p2);

  const p3 = BE.GetSearchedUserName();

  const ph = BE.GetSearchedPhotos();

  const top = BE.GetSearchTop();

  console.log(p2.data);

  const usernametweet = BE.GetTweetsName();
  console.log(p2.data);

 
  console.log(tweets);
 
  BE.getUserLook();



  

 

  


  if (word) {
    //console.log(word)
    localStorage.setItem("searchData", word);
    var body = {
      data: word,
    };
  }
  


  localStorage.setItem("ID", id);
  var body2 = {
    id: id,
  };

  

  

  function saveUser() {
    const promise = BE.Put_SaveUser();
    
    
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
              

                  <>
                  
                    {ph.data?.tweets[0].imageUrl.length === 1 ||
                    ph.data?.tweets[0].imageUrl.length === 2 ||
                    ph.data?.tweets[0].imageUrl.length === 3 ||
                    ph.data?.tweets[0].imageUrl.length === 4 ? (
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
