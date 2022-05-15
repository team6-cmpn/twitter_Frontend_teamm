import React, {useState}  from "react";
//import "../Widgets.css";
import "antd/dist/antd.css";
// import { FaSistrix } from "react-icons/fa";
import FriendSuggestions from "./FriendSuggestions/FriendSuggestions";
import TopicItem from "./Topics/Topics";
import {Form,Input} from "antd";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import {useNavigate, Link} from "react-router-dom";
import Explore from "../Explore";
//import "./FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem.css";
/**Trends
 * Shows search bar & topics & friendsuggetion
 *  
 * @returns (Layout of search & topics & friendsuggetion compnents)
*/
function Trends (){
  const history = useNavigate();
  const [data, setData] = useState(null);
  const [btndisabled, setbtndisabled] = useState(true);
  
  const handleSubmit=(e) =>{
    if (e.key === 'Enter') {
      return (
        history("/Explore")
        // <Routes>
        //    <Route element={<Explore />}></Route>
        // </Routes>
        //console.log("bye")
        //<Redirect push to="/Explore"/>
      )
        // TODO redirect user to '/explore'
       
       // <Link to="/Explore"></Link>
    }
}
  const buttonState = (changedValues, allValues) => {
    //allValues[1]=<h1>hiiiyasta</h1>;
    if ( allValues.ne !== undefined &&  allValues.ne !== ''  ) {
      
      setbtndisabled(false);
     
      
    } 
    else{
      
      
      setbtndisabled(true);
      
      console.log(allValues);
    }
  };
  function getData(val){
   setData(val.target.value)
   localStorage.setItem('word', val.target.value);
   };
  var body={
    data:data
    
  }
  return (
    <div className="hide_tr">
      <div className="trends__search">
      <Form  onValuesChange={buttonState}>
       <Form.Item  >  
        <Input
          onChange={getData}
          id="searchbar"
          className="trend__control"
          onKeyPress={handleSubmit.bind(this)}
          placeholder="Search Twitter">
        </Input>
        </Form.Item>
        </Form>
        {/* <FaSistrix className="trend__icon search" /> */}
      </div> 
      <div>
      <TopicItem />
      <FriendSuggestions />
      </div>
    </div>
  );
};

export default Trends;