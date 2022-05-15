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



function Bookmarks(){

    // const[img,setImg]=useState();
    // setImg({bookmarksImg});
    const [tweeted, postedtweet] = React.useState([]);
    const [empty, setEmpty] = React.useState(true);
    const content = (
        <Link id='clearBookmarks' to='' onClick={()=>{setEmpty(true)}}>Clear all Bookmarks</Link>
      );
    React.useEffect(() => {
        (async () => {
          const resp = await GetPostTweet();
          postedtweet(resp);
          setEmpty(false)
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
                {empty?(
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
           
            
             {tweeted.map((userlist, index) => (
            <Post
              key={index}
              displayName={userlist.displayName}
              username={userlist.username}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              date={userlist.date}
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