import '../Home.css';
import Sidebar from "../Sidebar/Sidebar";
import './Bookmarks.css'
import '../StartPage/StartPage.css';
import Trends from "../Widgets/Trends";
import bookmarksImg from "../images/bookmarksImg.png"
import React, {useState} from "react";
import { GetPostTweet } from "../homepage/feedmock";
import Post from "../homepage/Post";
import { RecoilRoot } from "recoil";
import {BiDotsHorizontal} from "react-icons/bi";
import {Modal,Popover} from "antd";
import {Link} from "react-router-dom";

import  * as BE  from './backEndBookmarks';
import { setTwoToneColor } from '@ant-design/icons';


function Bookmarks(){

    // const[img,setImg]=useState();
    // setImg({bookmarksImg});
    const [tweeted, postedtweet] = React.useState([]);
    const [empty, setEmpty] = React.useState(true);
    const [user, setUser] = React.useState([]);
    const [name, setName] = React.useState('');
    const [bookmarkAdded, setBookmarkAdded] = useState(false);
    const [remove, setRemove] = useState();
    const [val, setval] = useState();
    const [checkout,setCheckout] = useState({});
    let count=0;


    const content = (
        <Link id='clearBookmarks' to='' onClick={()=>{BE.deleteAllBookmarks();setEmpty(true);}}>Clear all Bookmarks</Link>
      );
    // setEmpty(true)
    const countRef = React.useRef(0);
    
    var userIds=[];
    React.useEffect(() => {
        (async () => {
          const resp = await BE.GetBookmarks();
          setBookmarkAdded(resp.length);

           for (let i = 0; i < resp.length; i++) {
                userIds += resp[i].user +",";
               
              }
      
          userIds=userIds.slice(0,-1)
          localStorage.setItem('tag',userIds)
          console.log(userIds.length)
          setRemove(userIds.length)
          postedtweet(resp);
          if(resp.length!==0){
          setEmpty(false)}
          if(userIds.length!==0){
          const userResp=BE.getUserLookup();
          
          
          // userResp.then(function (tempresult) {
          //   setval(tempresult);
          // });
  
        }
       
          

        })();
      }, []);




    return (
        <RecoilRoot>
            <Sidebar />
            <Trends/>
        <div>

            
    
            <div className='menu '>
                <div className="title">
                    <span>Bookmarks</span>
                </div>
                {empty ?(
                <div className="column flex-container">
                <img className='bookCageImg' alt='' src={bookmarksImg}/>
                <span className='text'>Save Tweets for Later</span>
                <span className='text2'>Dont let the good ones fly away! Bookmark Tweets to easily find them again in the future.</span>
                </div>
                ):(
                <article>
          { 
            <>
             
            
            <Popover content={content} trigger="click"><BiDotsHorizontal className="moreButton" id='moreButton'/></Popover>
         
            {/* {countRef.current++} */}
             {tweeted.map((userlist, index) => (
              
            <Post
              key={index}
              displayName={localStorage.getItem(`nameForBookmarks ${index}`)}
              username={localStorage.getItem(`usernameForBookmarks ${index}`)}
              mention={userlist.mention}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              date={userlist.created_at}
              tweet_id={userlist._id}
              flag2={count=count+1}
         
            />
          
          ))}
           
            </>
         
          }
      
        </article>)}
            </div>
        </div>
        </RecoilRoot>
       
      );
    }
    
export default Bookmarks;