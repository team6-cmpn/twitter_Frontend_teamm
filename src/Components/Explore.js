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
import Post from "./homepage/Post";
import {RecoilRoot} from "recoil";
import { GetPostTweet } from "./homepage/feedmock";
import FriendSuggestionItem from "./Widgets/FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem";
import { type } from "@testing-library/user-event/dist/type";
import { Tab } from "@material-ui/core";
// import {getUserInfo} from './Profile/backEndProfile'
/**Explore
 * Shows explore page for the user 
 *  
 * @returns (Layout of explore page)
 */
 
function Explore() {
  
  function Tabs(){
    if(section ===1 )
    {
    console.log("section1");
    <div>
          { 
           <>
             {item}
           </>
          
          }
    </div>
    
    console.log("hyhyh");
    }
    else if(section === 2)
    {      
    console.log("section2")
    {
      <>
      {item}
      </>
    }
    }
    else if(section === 3)
    {       
    console.log("section3")
    {
      <>
      {item}
      </>
    }
    }
    else if(section === 4)        
    console.log("section4")
  }

  var inputStyles= {
    
    color: "red"
  };
  const word=localStorage.getItem("word");
  //console.log(word);
  // const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  const [user, setusername] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [tweets, showTweet] = useState([]);
  const [twetted, postedtweet] = useState([]);
  const [content, getcontent] = useState([]);



  const [displayN, setDisplay] = useState([]);
  const [tweet_id, setid_tweet] = useState([]);
  const [date, setdate] = useState();
  const [disp_img, getimg] = useState([]);
  
 
    
    
  React.useEffect(() => {
    (async () => {
      const resp = await GetPostTweet();
      postedtweet(resp);
    })();
  }, []);


  

  setTimeout(() => {
    setLoading(false);
    }, 2000);
    // const [filteredResults, setFilteredResults] = useState([]);
    const [section, setSection] = useState(1);
    
    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);
    const [item,setItem] = useState();
    const [item1,setItem1] = useState();
    const [item2=[],setItem2] = useState();
    const [item3,setItem3] = useState();
    const [id,setID] = useState();
    const [item4,setItem4] = useState();
    const [btndisabled, setbtndisabled] = useState(true);
    const [mention, setmention] = useState();
    const [user_id, setid_user] = useState([]);
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
  
  if(word)
  {
  //console.log(word)
  localStorage.setItem("searchData",word)
  var body={
    data:word
    
  }
  }
  if(data)
 {
  localStorage.setItem("searchData",data)
  var body={
    data:data
    
  }
  }
  
  //  var body={
  //   data:data
    
  // }

  // var body1={
  //   data1:data1
    
  // }
  //console.log(d);
  //console.log(data)

  function nextButtonAction(){

    //mockAPI.searchh(body);
    // if(section === 1)
    // {
    // const promise=BE.backEndTop(body);
    // promise.then((text)=>{setItem(text)});
    // console.log(item);
    // }
    //if (section === 1)
    //{
    const promise=BE.backEndTop(body);
    promise.then((text)=>{setItem(text)});
    localStorage.getItem("userI");
    // const user=getUserInfo();
    user.then(data=>{setItem4(data)});
    
    
    console.log(`${localStorage.getItem('userI')}`);

    console.log(item);
    //console.log(item[1]);
    console.log(item4);

    
    //console.log(item);
    //}
   //else if (section===2)
  // {
    const promise1=BE.backEndLatest(body);
    promise1.then((text)=>{setItem1(text)});
    console.log(item1);
  //  }
    //if(section===4)
   // {
    //console.log(data);
    const promise2=BE.backEndPeople(body);
    promise2.then((text)=>{setItem2(text)});
    //const promise3=BE.backEndPeople(body);
    //promise3.then((text)=>{setItem3(text)});
    console.log(item2);
    //console.log(item2);
     
   

    //const promise3=BE.backEndPhotos(body);
    //promise3.then((text)=>{setItem3(text)});
    //console.log(item3);
   // }
   // }
    //console.log(promise);
    // history('/home');
  }

  localStorage.setItem("ID",id)
  var body2={
    id:id
    
  }

  function saved() 
  {
  const promise3=BE.backEndSavedSearch(body);
  promise3.then((text)=>{setItem3(text)});
  console.log(item3);
  }
  
  // function nextButton(){

  //   //mockAPI.searchh(body);
  //   if(word)
  //   {
  //   const promise=BE.backEndTop(body1);
  //   promise.then((text)=>{setItem(text)});
  //   console.log(item);
  //   console.log(word);
  //   if (section === 2)
  //   {
  //   const promise1=BE.backEndPeople(body1);
  //   promise1.then((text)=>{setItem1(text)});
  //   }
  //   //console.log(promise);
  //   // history('/home');
  // }
  // }


  
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
       <Input  onChange={getData} id="search" className="trend__contr "  type="text" 
       placeholder="Search Twitter" ></Input>
       </Form.Item>
       </Form>
       
       {/* <FaSistrix className="trend s" /> */}
       <div><button style={{"cursor": "pointer"}} id="searchbutton" onClick={()=>
         //if (word)
         //nextButton();
         //else 
         nextButtonAction()} type="button">Search</button></div> 
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
        
       
        <div>
        <RecoilRoot>
          { (section===1)  ? 
            //Tabs()
           <>
           
            <Post
              text={item}
              />
            <FriendSuggestionItem style={{"position":"fixed"}}
              username= {item2[1]}
              displayName={item2[0]}
            /> 
             {/* {item} */}
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
          :
          (section === 2) ?
            //console.log("hello")
           <>
           <Post
              text={item}
            />
           {twetted.map((userlist, index) => (
                                 <Post
                                 key={index}
                                 displayName={userlist.displayName}
                                 username={userlist.username}
                                 text={userlist.text}
                                 image={userlist.image}
                                 avatar={userlist.avatar}
                                 date={userlist.date}
                                 />))}
           </>
          : (section === 3)?
            <>
            <FriendSuggestionItem 
              username= {item2[1]}
              displayName={item2[0]}
            />
            </>
          :
          <>
           {/* {twetted.map((userlist, index) => (
                                 <Post
                                  text={item}
                                 />))}  */}
             
            {twetted.map((userlist, index) => (
                                 <Post
                                  username={item2}
                                 />))}                  
          </>
          }
          
            {/* (
             // Tabs()
             console.log(item)
             
            //console.log("offf")
            
            )//:(console.log("yaa")) */}
          
           
           
         
           
         
           
          </RecoilRoot>
        </div>
           
                     
        </div> 
                      
       
        
    
    <Trends/>
    </SettingsBox>
  );
}
export default Explore;

