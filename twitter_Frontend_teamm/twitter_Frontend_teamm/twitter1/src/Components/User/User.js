import '../Profile/Profile.css'
import '../Notifications.css'
import './User.css'
import React from 'react';
import  { useState} from 'react';
import { Link } from 'react-router-dom';
import   * as mockAPI   from './UserMock';
import  getUserInformation    from './UserMock';
import Trends from "../Widgets/Trends";
import Sidebar from "../Sidebar/Sidebar";
import {getUserInfo} from '../Profile/backEndProfile';
import {Follow,destroyFollow, Block} from './BackendUser';
import {Modal} from "antd";
import "../Widgets/FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem.css";
import { GetPostTweet } from "../homepage/feedmock";
import Post from "../homepage/Post";
import { RecoilRoot } from "recoil";
import { Popover } from 'antd';
/**User
 * Shows User layout 
 *  
 * @returns (Layout of user and follow, block and mute functionality)
 */
function User(){
    const [isTab, setIsTab] = useState(1);
    const [twetted, postedtweet] = React.useState([]);
    
    
    React.useEffect(() => {
      (async () => {
        const resp = await GetPostTweet();
        postedtweet(resp);
      })();
    }, []);

    const [UserInfo, setUserInfo] = React.useState([]);
    React.useEffect(() => {
    (async () => {
        const resp = await getUserInformation();
        setUserInfo(resp);
      })();
    }, []);
   
   
    const [Item, setItem] = useState();
    

  
    const [MuteState, setMuteState] = useState("Mute");
    const toggleMute = () => {
        setMuteState((state) => (state === "Unmute" ? "Mute" : "Unmute"));
    };
    const [BlockState, setBlockState] = useState("Block");
    const toggleBlock = () => {
        setBlockState((state) => (state === "Block" ? "unBlock" : "Block"));
    };
    const [isBModalVisible, setBModalVisible] = useState(false);
    const onBModal = (stateMain = true) => {
      setBModalVisible(stateMain);
    };
    const [textState, setTextState] = useState("Follow");
    const toggleText = () => {
      setTextState((state) => (state === "Following" ? "Follow" : "Following"));
    };
    const [isModalVisible, setModalVisible] = useState(false);
    const onSubModel = (stateMain = true) => {
      setModalVisible(stateMain);
    };
    const onExist = () => {
      setModalVisible(false);
      setBModalVisible(false)
    };

    const user=getUserInfo();
    user.then(data=>{setItem(data)});
    console.log(user);
    
    function FollowButtonActions(){
        Follow(localStorage.getItem("userId"));
        mockAPI.follow(body);
        if (textState==="Follow")
        toggleText();
        else
        onSubModel();
    } 

    var body={
        userImage: Object.keys(UserInfo).map((user, index) => {
            return (
                <div>
                    {UserInfo[user].img} 
                
                </div> )
            }),
        displayname: Object.keys(UserInfo).map((user, index) => {
            return (
                <div>
                    {UserInfo[user].name} 
                
                </div> )
            }),
        username: Object.keys(UserInfo).map((user, index) => {
            return (
                <div>
                    {UserInfo[user].username} 
                
                </div> )
            }),
    }
    const content = (
            <div>
                <div className="MoreList" onClick={() => toggleMute()}><div>{MuteState}</div></div>
                <div className="MoreList" onClick={() => 
                {if (BlockState==="Block")
                onBModal()
                else
                toggleBlock()}}><div>{BlockState}</div></div>
            </div>
      );
    return(
    <div>
    <Sidebar />
    <div className='Expmenu'>
        <div> 
            <div className="notificationsTitle" id="ProfileTitle">
                <span>{Object.keys(UserInfo).map((user, index) => {
                    return (
                        <div>
                            {UserInfo[user].name} 
                        
                        </div> )
                    })}</span>
            </div> 
            <div>
                
                <div>
                {Object.keys(UserInfo).map((user, index) => {
                    return (
                        <div className='Avatar' >
                        <img  className="form-img__img-preview" src={UserInfo[user].img} alt=''/>
                        </div>
                        )
                    })}
                </div>
                <br></br>
                <br></br>
                <div id="bioName" className='name'>
                {Object.keys(UserInfo).map((user, index) => {
                    return (
                        <div>
                            {UserInfo[user].name} 
                        
                        </div> )
                    })}
                     </div>
                {/* <br></br> */}
               <div className='Username'> 
                   {Object.keys(UserInfo).map((user, index) => {
                    return (
                        <div>
                            {UserInfo[user].username} 
                        
                        </div> )
                    })}
                </div> 
                <div className='Username'>{Item}</div>
                <br></br>
                {/* <div id="bioBio" className='Bio'></div>
                <br></br>
                <GrLocation className='Bio'></GrLocation>
                <div id="bioLocation" className='Bio'></div>
                
                <br></br>
                <BiLink className='Bio'></BiLink>
                <div id="bioWebsite" className='Bio'></div> */}
                {/* <Link to={`/${localStorage.getItem("UserName")}`}>{localStorage.getItem("displayName")}</Link> */}

                
                <div>
                    
                    <Popover
                    content={content}
                    title="Title"
                    trigger="click"
                    >
                        <button id="More" className="More" ><span>...</span></button>
                    </Popover>
                    
                    <button id="FollowButton" class="ButtonFollow" onClick={() => FollowButtonActions() }>
                        {textState}   
                    </button> 
                    <Modal
                    style={{textAlign: "center"}}
                    visible={isBModalVisible}
                    bodyStyle={{height: 300, font: "Helvetica", textAlign: "left"}}
                    width={500}
                    alignItems={{top: Window}}
                    onCancel={() => setBModalVisible(false)}
                    footer={null}
                    
                >
                    <div className="for_model">
                    <div style={{fontSize: "200%", marginTop: "10px", color: "black", textAlign: "center" }}>Block this user?</div>
                    <div style={{padding: "30px 30px"}}>They will not be able to follow you or view your Tweets, and you will not see Tweets or notifications from this user. </div>
                    <button id="Block" onClick={()=>{toggleBlock(); onExist(); Block(localStorage.getItem("userId"))}} className="ButtonBlock">Block</button>
                    </div>
                </Modal>
                
                <Modal
                    style={{textAlign: "center"}}
                
                    visible={isModalVisible}
                    bodyStyle={{height: 300, font: "Helvetica", textAlign: "left"}}
                    width={500}
                    alignItems={{top: Window}}
                    onCancel={() => setModalVisible(false)}
                    footer={null}
                    
                >
                    <div className="for_model">
                    <div style={{fontSize: "200%", marginTop: "10px", color: "black", textAlign: "center" }}>Unfollow this user?</div>
                    <div style={{padding: "30px 30px"}}>Their Tweets will no longer show up in your home timeline. You can still view their profile. </div>
                    <button id="Unfollow" onClick={()=>{toggleText(); onExist();destroyFollow(localStorage.getItem("userId"))}} className='ButtonBlock'>Unfollow</button>
                    </div>
                </Modal>
                
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
            <div>
             <RecoilRoot>
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
                    </div>
                    <article>
                        {
                         (isTab===1)?
                        
                            <>

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
                         :
                         (isTab===2)?
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
                        : (isTab===3)?
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
                        : 
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
                        
                        
                        }
          
           
                     </article>
                
                </RecoilRoot>
                
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