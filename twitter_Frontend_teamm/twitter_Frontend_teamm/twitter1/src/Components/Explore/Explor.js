import router, { useState, useEffect, useCallback } from "react";
import Trends from "../Widgets/Trends";
import { Form, Input, Popover, Button, Space } from "antd";
import "../Profile/Profile.css";
import * as BE from "./backEndSearch";

import Post from "../homepage/Post";
import { RecoilRoot } from "recoil";
import { backEndTop } from "./backEndSearch";
import { backEndP } from "./backEndSearch";

import FriendSuggestionItem from "../Widgets/FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem";
import { type } from "@testing-library/user-event/dist/type";
import { Tab } from "@material-ui/core";

import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

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

  

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      return (
        
        history("/Explore")

        // TODO redirect user to '/explore'
      );
      
    }
  };

  function getData(val) {
    setData(val.target.value);
    localStorage.setItem("word", val.target.value);
  }

  let word = localStorage.getItem("word");
  if (word[0] == "@") {
    word = word.substring(1);
  }

  let word1 = localStorage.getItem("word1");
  if (word1[0] == "@") {
    word1 = word1.substring(1);
  }

 
  const [tweets, showTweet] = useState([]);
  
 
  const p2 = BE.GetSearchedName();
  console.log("console", p2);

  const p3 = BE.GetSearchedUserName();

  const ph = BE.GetSearchedPhotos();

  const top = BE.GetSearchTop();
  console.log(p2.data);

  const usernametweet = BE.GetTweetsName();
  console.log(p2.data);

 
  
  BE.getUserLook();



  const buttonState = (changedValues, allValues) => {
    if (allValues.n !== undefined && allValues.n !== "") {
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
  };

 
  if (word1) {
    //console.log(word)
    localStorage.setItem("searchData", word1);
    var body = {
      data: word1,
    };
  }


  if (word[0] === "@") {
    const promise2 = BE.backEndUsername(body);
    promise2.then((text) => {
      setItem2(text);
    });
    //console.log(item2);
  }

  

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

  function saveUser() {
    const promise = BE.Put_SaveUser();
  
  }
  
  const promise3 = BE.SavedSearch(body);

  function savedSearch() {
    var userInfo = [];
    if (promise3.status === 200) {
      //promise3.then((text)=>{setItem5(text)});
      //var searchedusersave = promise3?.data;
      for (let i = 0; i < promise3.data.savedText.length; i++) {
        userInfo += promise3.data.savedText[i] + ",";
      }
    }
    console.log("savedddd", userInfo);
    userInfo = userInfo.slice(0, -1);
    console.log("savedseachhhhhhhh", userInfo);
    return userInfo;
   
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

  if (top.status === 200 && word[0] !== "@") {
    var searchedtop = top.data?.tweets;
    console.log(searchedtop);
  }

  if (top.status === 200 && word[0] === "@") {
    var m = top.data?.mentions;
    console.log("hiiiiiiiihhh", top.data);
  }

  if (ph.status === 200 && word[0] !== "@") {
    var photos = ph.data?.tweets;
    console.log("hiiiiiiiihhh", top.data);
  }

  var userr = usernametweet.data?.user;

  return (
    <div>
      <Sidebar />

     
      <div className="Expmenu">
        <Form>
          <Form.Item>
            <Popover
              content={savedSearch}
              trigger="hover"
              title="Search History"
            >
              <Input
                onChange={getData}
                onKeyPress={handleSubmit.bind(this)}
                id="search"
                className="trend__contr "
                type="text"
                placeholder="Search Twitter"
              />
            </Popover>
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
            {section === 1 && (data || word1 || word1 === "@") ? (
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
                              text={userlist.text}
                              date={userlist.created_at}
                              user_id={localStorage.getItem("userId")}
                              image={userlist.imageUrl}
                              tweet_id={userlist._id}
                              user_tweeted_id={userlist.user}
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
                              text={userlist.text}
                              date={userlist.created_at}
                              tweet_id={userlist._id}
                              user_tweeted_id={userlist.user}
                              logedin_user_id={localStorage.getItem("userId")}
                              //avatar = {`${Configure.backURL}${Url_avatar}`}
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
                          date={userlist.created_at}
                          tweet_id={userlist._id}
                          user_tweeted_id={userlist.user}
                          logedin_user_id={localStorage.getItem("userId")}
                          user_id={localStorage.getItem("userId")}
                          mention={userlist.mention}
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
                      tweet_id={userlist._id}
                      user_tweeted_id={userlist.user}
                      logedin_user_id={localStorage.getItem("userId")}
                      date={userlist.created_at}
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

          
          </RecoilRoot>
        </div>
      </div>

      <Trends />
    </div>
  );
}
export default Explore;
