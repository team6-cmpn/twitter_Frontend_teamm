import React, {useState, useEffect} from "react";
// import {RecoilRoot} from "recoil";
import './Home.css';
// import Sidebar from "./Sidebar/Sidebar";
// import { FaSistrix } from "react-icons/fa";
import Trends from "./Widgets/Trends";
// import FriendSuggestions from "./Widgets/FriendSuggestions/FriendSuggestions";
// import TopicItem from "./Widgets/Topics/Topics";
import {Form,Input} from "antd";
// import { Avatar, Button } from "@material-ui/core";
// import LikedYou from "./LikedYou";
// import FollowedYou from "./FollowedYou";
// import  * as mockAPI   from './mockSearch'; 
import SettingsBox from "./SettingsBox/SettingsBox";
import "./Notifications.css";
import  * as BE  from './backEndSearch';
// import Post from "./homepage/Post";
import * as mocked from "./homepage/feedmock";
/**Explore
 * Shows explore page for the user 
 *  
 * @returns (Layout of explore page)
 */
 
function Explore() {
  // const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [tweets, showTweet] = useState([]);
  const [twetted, postedtweet] = useState([]);
  function addTweet(newTweet) {
    showTweet((prevTweet) => {
      return [newTweet, ...prevTweet];
    });
  }
  useEffect(() => {
    (async () => {
      const resp = await mocked.GetPostTweet();
      postedtweet(resp);
    })();
  }, []);
  setTimeout(() => {
    setLoading(false);
    }, 2000);
    // const [filteredResults, setFilteredResults] = useState([]);
    const [section, setSection] = useState(1);
    const [item,setItem] = useState();
    const [data, setData] = useState(null);
    const [btndisabled, setbtndisabled] = useState(true);
    const buttonState = (changedValues, allValues) => {
    if ( allValues.n !== undefined &&  allValues.n !== ''  ) {
      
      setbtndisabled(false);

    } 
    else{
      
      setbtndisabled(true);
    
    }
  };
  // const searchData = (value) => {
  //   setSearchTerm(value)
  //   if (searchTerm !== '') {
  //       const filteredData = APIData.filter((item) => {
  //           return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
  //       })
  //       setFilteredResults(filteredData)
  //   }
  //   else {
        
  //   }
// }
  function getData(val){
   setData(val.target.value)
   };
  
  // var d = data.toString();
  // if(typeof data === 'string')
  // {
  //   console.log(data[0]);
  // }else{
  //   console.log('str is not a string');
  // }

  localStorage.setItem("searchData",data);
  
   var body={
    data:data
    
  }
  //console.log(d);
  //console.log(data)

  function nextButtonAction(){

    //mockAPI.searchh(body);
    const promise=BE.backEndTop(body);
    promise.then((text)=>{setItem(text)})
    console.log(promise);
    // history('/home');
  }
  // function ch(){
  //   getData();
  //   nextButtonAction();
  // }
  
  return (
    
    <SettingsBox>
    
      
       {/* <Form onValuesChange={buttonState}>
       <Form.Item name='n'>
       <Input  onChange={getData} className="trend__contr " placeholder="Search Twitter"></Input>
       </Form.Item>
       </Form>
       <FaSistrix className="trend s" />
       <div><button onClick={()=>nextButtonAction()} >Search</button></div> */}
       <article>
       
       {/* {searchTerm.length > 1  (
                    filteredResults.map((item) => {
                        return (
                            
                          <div>      
                            <FollowedYou>{item.displayName}</FollowedYou>
                            
                         </div>       
                         
                        )
                    })
       )}  */}
       </article>      
       {/* <div className="feed">
        
          <div
            onClick={() => setIsDrawerBar(false)}
            className="drawerBarPanel"
          />
        
        <DrawerBar active={isDrawerBar} /> 
        <div className="explore-header">
          <div onClick={() => setIsDrawerBar(true)}>
            <Avatar src="https://avatars.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
          </div>
          <SearchInput placeholder="Search Twitter" />
          <SettingsIcon /> 
        </div>
        <div className="exploreContent">
          {loading ? <Loading /> : <TopicItem />}
        </div>
        </div> */}
       {/* <SearchInput  placeholder="Search Twitter" /> */}
            <div className="Notimenu">
           
        <Form onValuesChange={buttonState}>
       <Form.Item name='n'>
       <Input  onChange={getData} id="search" className="trend__contr " placeholder="Search Twitter"></Input>
       </Form.Item>
       </Form>
       {/* <FaSistrix className="trend s" /> */}
       <div><button id="searchbutton" onClick={()=>nextButtonAction()} >Search</button></div> 
                <div className="notificationsCategory">
                        <div
                        className={section===1 && "notificationActive" }
                        onClick={() => setSection(1)}
                        >
                        <span>Top</span>
                        </div>
                        <div
                        className={section===2 && "notificationActive"}
                        onClick={() => setSection(2)}
                        >
                        <span>Latest</span>
                        </div>
                        <div
                        className={section === 3 &&  "notificationActive"}
                        onClick={() => setSection(3) }
                        
                        >
                        <span>People</span>
                        </div>
                        <div
                        className={section===4 && "notificationActive"}
                        onClick={() => setSection(4)}
                        >
                        <span>Photos</span>
                        </div>
                </div>
                
        {/* {tweets.map((tweetItem, index) => {
          return (
            <Post
              displayName="mai"
              username="@mai gamda"
              text={tweetItem}
              id="123"
              post="false"
              avatar="https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          ); 
        })} */}
                <article>
          {section===1 ? (
            <>
            {item}
          {/* {twetted.map((userlist, index) => (
            <Post
              key={index}
              displayName={userlist.displayName}
              username={userlist.username}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              date={userlist.date}
            />
          ))} */}
            </>
          ) : (
            <>
            {item}
          {/* {twetted.map((userlist, index) => (
            <Post
              key={index}
              displayName={userlist.displayName}
              username={userlist.username}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              date={userlist.date}
            />
          ))} */}
            </>
          )}
        </article>
              
                     
                 </div> 
                      
       
        
    
    <Trends/>
    </SettingsBox>
  );
}
export default Explore;

