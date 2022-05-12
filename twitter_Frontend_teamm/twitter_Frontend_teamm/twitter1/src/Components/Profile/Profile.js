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
import  getUsernames    from './ProfileMock';
import Trends from "../Widgets/Trends";
import Sidebar from "../Sidebar/Sidebar";
import {GrLocation} from "react-icons/gr"
import {BiLink, BiArrowBack} from "react-icons/bi"
import {getUserInfo} from './backEndProfile'
import { GetPostTweet } from "../homepage/feedmock";
import Post from "../homepage/Post";
import { RecoilRoot } from "recoil";

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
    
    const [{alt, src}, setImg] = useState({
        src: placeholder,
    });

    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
    }
    const [Username, setUsernames] = React.useState([]);
    React.useEffect(() => {
    (async () => {
        const resp = await getUsernames();
        setUsernames(resp);
      })();
    }, []);
    const [name, setName] = useState('');
    const [bio, setBio] = useState(null)
    const [location, setLocation] = useState(null)
    const [website, setWebsite] = useState(null)
    const [editname, setEditName] = useState('');
    const [editbio, setEditBio] = useState(null)
    const [editlocation, setEditLocation] = useState(null)
    const [editwebsite, setEditWebsite] = useState(null)
    const [Item, setItem] = useState();

    function SaveButtonActions(){
    mockAPI.Profile(body); 
    setMainModalVisible(false);
    setName(editname);
    setBio(editbio);
    setLocation(editlocation);
    setWebsite(editwebsite);
    }
    var body={
        name: editname,
        bio: editbio,
        location: editlocation,
        website: editwebsite,
        date:date,
        img: {alt,src},
    }
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
                            <img id="img" src={src} alt={alt} className="form-img__img-preview"/>
                        </div>
                        <div id="bioName" className='name'> {name}</div>
                        <br></br>
                       <div className='Username'> 
                           {Object.keys(Username).map((user, index) => {
                            return (
                                <div>
                                    {Username[user].User} 
                                
                                </div> )
                            })}
                        </div> 
                        <div className='Username'>{Item}</div>
                        <br></br>
                        <div id="bioBio" className='Bio'>{bio}</div>
                        <br></br>
                        <GrLocation className='Bio'></GrLocation>
                        <div id="bioLocation" className='Bio'>{location}</div>
                        
                        <br></br>
                        <BiLink className='Bio'></BiLink>
                        <div id="bioWebsite" className='Bio'>{website}</div>

                        <br></br>
                        <div>
                        <button id="editButton" class="ButtonEditProfile" onClick={()=>setMainModalVisible(true)}><span>Edit Profile</span></button>
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
                                        <input value={editname} className="TextBox" type="text" id="name" name="name"  onChange={e => setEditName(e.target.value)} required minlength="0" showCount maxlength="50" size="50" placeholder="Name"></input>
                                        
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
                                        {/* <input class="Month" type="text" id="month" name="month" size="50" placeholder="Month"></input>
                                        <input class="Day" type="text" id="day" name="day" size="50" placeholder="Day"></input>
                                        <input class="Day" type="text" id="year" name="year" size="50" placeholder="year"></input> */}
                                    
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