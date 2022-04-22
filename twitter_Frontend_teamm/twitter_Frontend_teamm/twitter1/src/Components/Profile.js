import './Profile.css'
import './Notifications.css'
import React from 'react';
import  { useState} from 'react';
import placeholder from 'react-image-placeholder';
import { Modal } from 'antd';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import   * as mockAPI   from './ProfileMock';
import Trends from "./Widgets/Trends";
import Sidebar from "./Sidebar/Sidebar";
function Profile(props){
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    
    // const [User, setUser] = React.useState([]);
    // useEffect(() => {
    //     (async () => {
    //       const resp = await getUsers();
    //       setUser(resp);
    //     })();
    
    // }, []);
    const [isMainModalVisible, setMainModalVisible] = useState(false);
    const [isTab, setIsTab] = useState(1);
    // const Users=User();
    // const Name= Users[0].name;
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
        const [name, setName] = useState('');
        const [bio, setBio] = useState(null)
        const [location, setLocation] = useState(null)
        const [website, setWebsite] = useState(null)
        function getName(val){
            setName(val.target.value)
          };
        function getBio(val){
        setBio(val.target.value)
        };
        function getLocation(val){
            setLocation(val.target.value)
        };
        function getWebsite(val){
            setWebsite(val.target.value)
        };

        function SaveButtonActions(){
        mockAPI.post(body);
        setMainModalVisible(false);
        
        }
    var body={
        name: name,
        bio: bio,
        location: location,
        website: website,
        img: {alt,src},
    }



    return(
        <div>
            <Sidebar />
        
        <div className='Expmenu'>
            
            <div>  
                <div>
                    <div>
                        <img src={src} alt={alt} className="form-img__img-preview"/>
                    </div>
                    
                    <div className='Username'>
                        {name}
                        {/* <>
                            {User.map((Users, index) => (
                                <Users key={index} User={Users} />
                            ))}
                        </> */}
                    </div>
                    <br></br>
                    <div className='Bio'>{bio}</div>
                    <br></br>
                    <div className='Bio'>{location}</div>
                    <br></br>
                    <div className='Bio'>{website}</div>

                    <br></br>
                    <div>
                    <button class="ButtonEditProfile" onClick={()=>setMainModalVisible(true)}><span>Edit Profile</span></button>
                    </div>
                    <br></br>
                    <div className='FollowLink'>
                        
                        <Link to ="/Followers">Followers </Link>
                    </div>
                    
                    <div className='FollowLink'>
                        <Link to ="/Following">  Following  </Link>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="notificationsCategory">
                        <div
                        className={isTab === 1 && "notificationActive"}
                        onClick={() => setIsTab(1) }
                        >
                        <span>Tweets</span>
                        </div>
                        <div
                        className={isTab === 2 && "notificationActive"}
                        onClick={() => setIsTab(2)}
                        >
                        <span>Tweets & Replies</span>
                        </div>
                        <div
                        className={isTab === 3 && "notificationActive"}
                        onClick={() => setIsTab(3)}
                        >
                        <span>Media</span>
                        </div>
                        <div
                        className={isTab === 4 && "notificationActive" }
                        onClick={() => setIsTab(4) }
                        >
                        <span>Likes</span>
                        </div>
                </div>
                    <div>
                        <Modal style={{height: 50}} title={<div><h3>Edit profile</h3><button onClick={()=> SaveButtonActions()} class="ButtonSave">Save</button></div>} bodyStyle={{overflowY:'scroll'}} visible={isMainModalVisible} onCancel={()=>setMainModalVisible(false)}  footer={null}> 

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
                                    <input value={name} className="TextBox" type="text" id="name" name="name"  onChange={e => setName(e.target.value)} required minlength="0" showCount maxlength="50" size="50" placeholder="Name"></input>
                                    
                                </div>
                            
                        </label>
                        <br></br>
                        <label for="Bio">
                            
                                <div>
                                    <input className="BioTextBox" type="text" id="Bio" name="Bio" onChange={getBio} required minlength="0" showCount maxcount="160" size="160" placeholder="Bio"></input>
                                </div>
                            
                        </label>
                        <br></br>
                        <label for="Location">
                            
                                <div>
                                    <input  className="TextBox" type="text" id="Location" name="Location" onChange={getLocation} required minlength="0" maxlength="30" size="30" placeholder="Location"></input>
                                </div>
                        
                        </label>
                        <br></br>
                        <label for="Website">
                        
                                <div>
                                    <input className="TextBox" type="text" id="Website" name="Website" onChange={getWebsite} required minlength="0" maxlength="100" size="100" placeholder="Website"></input>
                                </div>
                            
                        </label>
                        <br></br>
                        <label for="Birthdate">
                        
                                <div>
                                    <h4> Birthdate </h4>
                                    <DatePicker style={{ width:450, borderRadius: 5, height:50, borderStyle: 'solid'}} onChange={onChange} />
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