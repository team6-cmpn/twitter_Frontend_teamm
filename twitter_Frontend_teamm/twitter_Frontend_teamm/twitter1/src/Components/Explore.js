
import React, {useState} from "react";
import './Explore.css';
import './Home.css';
import Sidebar from "./Sidebar/Sidebar";
import { FaSistrix } from "react-icons/fa";
import Trends from "./Widgets/Trends";
import FriendSuggestions from "./Widgets/FriendSuggestions/FriendSuggestions";
import TopicItem from "./Widgets/Topics/Topics";
import {Form,Input} from "antd";
import { Avatar, Button } from "@material-ui/core";
import LikedYou from "./LikedYou";
import FollowedYou from "./FollowedYou";
import  * as mockAPI   from './mockSearch'; 
function Explore() {
  const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
    }, 2000);
    const [filteredResults, setFilteredResults] = useState([]);
    const [section, setSection] = useState(1);
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
  const searchData = (value) => {
    setSearchTerm(value)
    if (searchTerm !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else {
        
    }
}
  function getData(val){
   setData(val.target.value)
   };

   var body={
    data:data
    
  }
  console.log(data)

  function nextButtonAction(){

    mockAPI.searchh(body);
    history('/home');
  }
  // function ch(){
  //   getData();
  //   nextButtonAction();
  // }
  
  return (
    <div className="twitter">
       <Sidebar />
       <Form onValuesChange={buttonState}>
       <Form.Item name='n'>
       <Input  onChange={getData} className="trend__contr " placeholder="Search Twitter"></Input>
       </Form.Item>
       </Form>
       <FaSistrix className="trend s" />
       <div><button onClick={()=>nextButtonAction()} >Search</button></div>
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
            <div className="Expmenu">
            
                
                <div className="exploreCategory">
                        <div
                        className={section===1 && "exploreActive" }
                        onClick={() => setSection(1)}
                        >
                        <span>Top</span>
                        </div>
                        <div
                        className={section===2 && "exploreActive"}
                        onClick={() => setSection(2)}
                        >
                        <span>Latest</span>
                        </div>
                        <div
                        className={section === 3 &&  "exploreActive"}
                        onClick={() => setSection(3) }
                        
                        >
                        <span>People</span>
                        </div>
                        <div
                        className={section===4 && "exploreActive"}
                        onClick={() => setSection(4)}
                        >
                        <span>Photos</span>
                        </div>
                </div>
                 
                  
                     
                 </div> 
                      
        <TopicItem />
        <FriendSuggestions />

        
    </div>
  );
}
export default Explore;



