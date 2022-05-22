import './Profile.css'
import '../Notifications.css'
import React from 'react';
import  { useState} from 'react';
import placeholder from 'react-image-placeholder';
import { Modal } from 'antd';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import   * as mockAPI   from './ProfileMock';
// import  getUsernames    from './ProfileMock';
import Trends from "../Widgets/Trends";
import Sidebar from "../Sidebar/Sidebar";
import {GrLocation} from "react-icons/gr"
import {BiLink} from "react-icons/bi"
import { UpdateProfile, UploadImageProfile, GetUserInfo, GetTweetList,GetMediaList,GetLikedTweetList} from './backEndProfile'
import { GetPostTweet } from "../homepage/feedmock";
import Post from "../homepage/Post";
import { RecoilRoot } from "recoil";
import axios from 'axios';
// import ImageComponent from "./ImageComponent"
import Configure from '../../Configure';


/**Profile
 * Shows User profile layout and enables user to edit profile info
 *  
 * @returns (Layout of profile and edit profile modal)
 */
function Profile(){
    const [date, setDate] = useState(null);
    const [isMainModalVisible, setMainModalVisible] = useState(false);
    const [isTab, setIsTab] = useState(1);
    const [twetted, postedtweet] = React.useState([]);
    
    
    React.useEffect(() => {
      (async () => {
        const resp = await GetPostTweet();
        postedtweet(resp);
      })();
    }, []);
    var TweetsLists= GetTweetList();
    console.log("MApping",TweetsLists)

    var LikedTweetsLists= GetLikedTweetList().tweets;
    // var id = LikedTweeetsLists.
    // const [test1, istest1] = React.useState();
    // LikedTweetsLists.then(function (result) {
    //     console.log("result", result);
    //     istest1(result);
    //   });
    console.log("listsss",LikedTweetsLists)
    var MediaLists=GetMediaList();

    var [{alt2, src2}, setImg2] = useState({
        src2: placeholder,
    });

    var [{alt, src}, setImg] = useState({
        src: placeholder,
    });

    const [imag, setupload] = useState();
    const handleImg = (e) => {
        if(e.target.files[0]) {
            
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            }); 
            console.log(src)
            console.log(e.target.files[0])
            var im=UploadImageProfile(e.target.files[0]); 
            im.then(data=>{setupload(data)});
            console.log(im)
            // const PImage=localStorage.getItem("Image")
            // setImg2(PImage)
        }   
    }
    console.log(imag?.url)
    localStorage.setItem("image",imag?.url)
    // const [Username, setUsernames] = React.useState([]);
    // React.useEffect(() => {
    // (async () => {
    //     const resp = await getUsernames();
    //     setUsernames(resp);
    //   })();
    // }, []);

   
    var [name, setName] = useState('');
    const [bio, setBio] = useState(null)
    const [location, setLocation] = useState(null)
    const [website, setWebsite] = useState(null)
    var [editname, setEditName] = useState('');
    var [editbio, setEditBio] = useState(null)
    const [editlocation, setEditLocation] = useState(null)
    const [editwebsite, setEditWebsite] = useState(null)
    // const [Item, setItem] = useState();
    const [upd, setupdate] = useState();
    const loginuser_id = localStorage.getItem("userId");
    var info= GetUserInfo()
    const [test, istest] = React.useState();
    info.then(function (result) {
        console.log("result", result);
        istest(result);
      });
    console.log(info)
    var Url=test?.profile_image_url
    // GetUserInfo().user.profile_image_url;
    console.log(Url)
    var image =`${Configure.backURL}${Url}`
    console.log(image)

    function SaveButtonActions(){
    mockAPI.Profile(body); 
    var up = UpdateProfile(update);
    up.then(data=>{setupdate(data)});
    console.log(upd);
    console.log(info)
    setMainModalVisible(false);
    setName(editname);
    setBio(editbio);
    if (editname===''){
        editname=localStorage.getItem("name");
    }else {
        localStorage.setItem("name", editname);
    }
    if (editbio===''){
        editbio=localStorage.getItem("description");
    }else{
        localStorage.setItem("description", editbio);
    }
    setLocation(editlocation);
    setWebsite(editwebsite);
    
    // if (src==='' || src2===''){
    //     setImg({
    //         src:localStorage.getItem("src"),
    //         alt:alt
    //     })
        // src=localStorage.getItem("src")
        // src2=src
        var Url=test?.profile_image_url

        // console.log(Url)
        var image =`${Configure.backURL}${Url}`
        // console.log(image)
        setImg2({
            src2: image,
            alt2: alt
        });
   
    
    }
    
    sessionStorage.setItem("name",editname);
    sessionStorage.setItem("description",editbio);
    // localStorage.getItem("Image")
    var body={
        name: editname,
        bio: editbio,
        location: editlocation,
        website: editwebsite,
        date:date,
        img: {alt,src},
    }
    var update={
        name: editname,
        description: editbio,
    }

    const username=localStorage.getItem("getUsername")
    console.log(name);
  
    name = localStorage.getItem("name")
    // const joined=localStorage.getItem("joinedAt")
     

    return(
        <div>
            <Sidebar />
            <div className='Expmenu'>
                <div> 
                    <div className="notificationsTitle" id="ProfileTitle">
                        <span>{name}</span>
                    </div> 
                    <div>
                        <div>
                            <img id="img" src={`${Configure.backURL}${Url}`} alt={alt2} className="form-img__img-preview"/>
                        </div>
                        <div id="bioName" className='name'> {name}</div>
                        <br></br>
                       <div className='Username'> {username} </div> 
                        {/* <div className='Username'> 
                           {Object.keys(Username).map((user, index) => {
                            return (
                                <div>
                                    {Username[user].User} 
                                
                                </div> )
                            })}
                        </div>  */}
                        
                        <br></br>
                        <div id="bioBio" className='Bio'>{localStorage.getItem("description")}</div>
                        <br></br>
                        <GrLocation className='Bio'></GrLocation>
                        <div id="bioLocation" className='Bio'>{location}</div>
                        
                        <br></br>
                        <BiLink className='Bio'></BiLink>
                        <div id="bioWebsite" className='Bio'>{website}</div>
                        <br></br>
                        {/* <div id="bioWebsite" className='Bio'>{joined}</div> */}
                        {/* <br></br> */}
                        <div>
                        <button id="editButton" class="ButtonEditProfile" onClick={()=>setMainModalVisible(true)}><span>Edit Profile</span></button>
                        </div>
                        <br></br>
                        
                        <div id="followers"className="FollowLink">
                            <Link to ="/Followers">{test?.followings_count}Followers </Link>
                        </div>
                        
                        <div id="following" className='FollowLink'>
                            <Link to ="/Following">  Following  </Link>
                        </div>
                        <br></br>
                        <br></br>
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
                            {TweetsLists.map((userlist, index) => (
                                <Post
                                key={index}
                                displayName={name}
                                username={username}
                                text={userlist?.text}
                                image={userlist?.imageUrl}
                                avatar={`${Configure.backURL}${Url}`}
                                tweet_id={userlist?._id}
                                mention={userlist?.mention}
                                date={userlist?.created_at}
                                user_tweeted_id={userlist?.user}
                                logedin_user_id={loginuser_id}
                                likes={userlist?.favorites.length}
                                retweets={userlist?.retweetUsers.length}
                                 />))}
                            </>
                         :
                         (isTab===2)?
                            <>

                            {TweetsLists.map((userlist, index) => (
                                <Post
                                key={index}
                                displayName={name}
                                username={username}
                                text={userlist?.text}
                                image={userlist?.imageUrl}
                                avatar={`${Configure.backURL}${Url}`}
                                tweet_id={userlist?._id}
                                mention={userlist?.mention}
                                date={userlist?.created_at}
                                user_tweeted_id={userlist?.user}
                                logedin_user_id={loginuser_id}
                                likes={userlist?.favorites.length}
                                retweets={userlist?.retweetUsers.length}
                                />))
                            }
                            </>
                        : (isTab===3)?
                            <>

                            {/* {MediaLists.map((userlist, index) => (
                                <Post
                                key={index}
                                displayName={name}
                                username={username}
                                text={userlist?.text}
                                // image={userlist?.imageUrl}
                                avatar={`${Configure.backURL}${Url}`}
                                tweet_id={userlist?._id}
                                mention={userlist?.mention}
                                date={userlist?.created_at}
                                user_tweeted_id={userlist?.user}
                                logedin_user_id={loginuser_id}
                                likes={userlist?.favorites.length}
                                retweets={userlist?.retweetUsers.length}
                                 />))} */}
                            
                            </>
                        : 
                            <>
                            {LikedTweetsLists.map((userlist, index) => (
                                <Post
                                key={index}
                                displayName={name}
                                username={username}
                                text={userlist?.text}
                                image={userlist?.imageUrl}
                                avatar={`${Configure.backURL}${Url}`}
                                tweet_id={userlist?._id}
                                mention={userlist?.mention}
                                date={userlist?.created_at}
                                user_tweeted_id={userlist?.user}
                                logedin_user_id={loginuser_id}
                                likes={userlist?.favorites.length}
                                retweets={userlist?.retweetUsers.length}
                                 />))}
                            </> 
                        
                        
                        }
          
           
                    </article>
                
                </RecoilRoot>
                        <div>
                            <Modal className="ant-modal-content"  title={<div><h3>Edit profile</h3><button onClick={()=> SaveButtonActions()} class="ButtonSave">Save</button></div>} bodyStyle={{overflowY:'scroll'}} visible={isMainModalVisible} onCancel={()=>setMainModalVisible(false)}  footer={null}> 

                            <div className="form__img-input-container">
                                <input 
                                    type="file" 
                                    accept=".png, .jpg, .jpeg" 
                                    id="photo" 
                                    className="visually-hidden"
                                    onChange={handleImg}
                                />
                                <label htmlFor="photo" className="form-img__file-label">
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#56ceef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                                        <circle cx="12" cy="10" r="3" />
                                        <circle cx="12" cy="12" r="10" />
                                    </svg>
                                </label>
                                <img src={src} alt={alt} className="form-img__img-preview"/>
                            </div> 
                            <label for="name">
                                
                                    <div>
                                        <input value={editname} className="TextBox" type="text" id="name" name="name"  onChange={e => setEditName(e.target.value) } required minlength="0" showCount maxlength="50" size="50" placeholder="Name"></input>
                                        
                                    </div>
                                    
                                
                            </label>
                            <br></br>
                            <label for="Bio">
                                
                                    <div>
                                        <input value={editbio} className="BioTextBox" type="text" id="Bio" name="Bio" onChange={e => setEditBio(e.target.value)} required minlength="0" showCount maxcount="160" size="160" placeholder="Bio"></input>
                                    </div>
                                
                            </label>
                            <br></br>
                            <label for="Location">
                                
                                    <div>
                                        <input value={editlocation} className="TextBox" type="text" id="Location" name="Location" onChange={e => setEditLocation(e.target.value)} required minlength="0" maxlength="30" size="30" placeholder="Location"></input>
                                    </div>
                            
                            </label>
                            <br></br>
                            <label for="Website">
                            
                                    <div>
                                        <input value={editwebsite} className="TextBox" type="text" id="Website" name="Website" onChange={e => setEditWebsite(e.target.value)} required minlength="0" maxlength="100" size="100" placeholder="Website"></input>
                                    </div>
                                
                            </label>
                            <br></br>
                            <label for="Birthdate">
                            
                                    <div>
                                        <h4> Birthdate </h4>
                                        <DatePicker id= "date" style={{ width:450, borderRadius: 5, height:50, borderStyle: 'solid'}} onChange={setDate} />
                                    </div>
                                
                            </label>
                        
                        
                        </Modal>
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
 


export default Profile;