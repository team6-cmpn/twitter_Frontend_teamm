import '../Profile/Profile.css'
import '../Notifications.css'
import React from 'react';
import  { useState} from 'react';
// import placeholder from 'react-image-placeholder';
import { Link } from 'react-router-dom';
// import   * as mockAPI   from '../Profile/ProfileMock';
import  getUsernames    from '../Profile/ProfileMock';
import Trends from "../Widgets/Trends";
import Sidebar from "../Sidebar/Sidebar";
import {GrLocation} from "react-icons/gr"
import {BiLink, BiArrowBack} from "react-icons/bi"
import {getUserInfo} from '../Profile/backEndProfile'
// import { GetPostTweet } from "../homepage/feedmock";
// import Post from "../homepage/Post";

function User(){
    const [isTab, setIsTab] = useState(1);
    // const [twetted, postedtweet] = React.useState([]);
    
    // React.useEffect(() => {
    //   (async () => {
    //     const resp = await GetPostTweet();
    //     postedtweet(resp);
    //   })();
    // }, []);
    // const [{alt, src}, setImg] = useState({
    //     src: placeholder,
    // });

    
    const [Username, setUsernames] = React.useState([]);
    React.useEffect(() => {
    (async () => {
        const resp = await getUsernames();
        setUsernames(resp);
      })();
    }, []);
   
   
    const [Item, setItem] = useState();
    // var [follow, setfollow] = useState(false);
    // const btn = document.getElementById('FollowButton');


    // function Follow(){

    //     if(setfollow() === false){
    //        follow = "Follow";
    //     }else{
    //         btn.value= "Red";
    //     }
    // }

    // function SaveButtonActions(){
    // mockAPI.Profile(body);
    
    // setName(editname);
    // setBio(editbio);
    // setLocation(editlocation);
    // setWebsite(editwebsite);
    // }
    // var body={
    //     name: editname,
    //     bio: editbio,
    //     location: editlocation,
    //     website: editwebsite,
    //     img: {alt,src},
    // }
    const user=getUserInfo();
    user.then(data=>{setItem(data)});
    console.log(Item);
    return(
    <div>
    <Sidebar />
    <div className='Expmenu'>
        <div> 
            <div className="notificationsTitle" id="ProfileTitle">
                <BiArrowBack ></BiArrowBack>
                <span>Profile</span>
            </div> 
            <div>
                <div>
                    {/* <img id="img" src={src} alt={alt} className="form-img__img-preview"/> */}
                </div>
                <div id="bioName" className='name'> </div>
                <br></br>
               <div className='Username'> 
                   {Object.keys(Username).map((user, index) => {
                    return (
                        <div>
                            {Username[user].User} ;
                        
                        </div> )
                    })}
                </div> 
                <div className='Username'>{Item}</div>
                <br></br>
                <div id="bioBio" className='Bio'></div>
                <br></br>
                <GrLocation className='Bio'></GrLocation>
                <div id="bioLocation" className='Bio'></div>
                
                <br></br>
                <BiLink className='Bio'></BiLink>
                <div id="bioWebsite" className='Bio'></div>

                <br></br>
                <div>
                <button id="FollowButton" class="ButtonEditProfile" ><span>Follow</span></button>
                </div>
                <br></br>
                <div id="followers"className="FollowLink">
                    <Link to ="/Followers">Followers </Link>
                </div>
                
                <div id="following" className='FollowLink'>
                    <Link to ="/Following">  Following  </Link>
                </div>
                <br></br>
                <br></br>
                <div className="notificationsCategory">
                    <div id="tweets"
                    className={isTab === 1 && "notificationActive"}
                    onClick={() => setIsTab(1) }
                    >
                    <span>Tweets</span>
                    </div>
                    <div id="tweets&replies"
                    className={isTab === 2 && "notificationActive"}
                    onClick={() => setIsTab(2)}
                    >
                    <span>Tweets & Replies</span>
                    </div>
                    <div id="Media"
                    className={isTab === 3 && "notificationActive"}
                    onClick={() => setIsTab(3)}
                    >
                    <span>Media</span>
                    </div>
                    <div id="likes"
                    className={isTab === 4 && "notificationActive" }
                    onClick={() => setIsTab(4) }
                    >
                    <span>Likes</span>
                    </div>
                    {/* <article>
                        
                            <>

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
                        
            
          
           
                    </article> */}
            </div>
                
        


    </div>
    </div>
    <div > 

    
    <Trends />  
    </div>
    </div>
</div>
)
}
export default User;