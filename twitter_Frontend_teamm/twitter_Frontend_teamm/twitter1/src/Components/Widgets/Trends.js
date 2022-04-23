import React, {useState}  from "react";
//import "../Widgets.css";
import "antd/dist/antd.css";
// import { FaSistrix } from "react-icons/fa";
import FriendSuggestions from "./FriendSuggestions/FriendSuggestions";
import TopicItem from "./Topics/Topics";
import {Form,Input} from "antd";
//import "./FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem.css";
function Trends (){

  const [data, setData] = useState(null);
  const [btndisabled, setbtndisabled] = useState(true);
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
   };
  var body={
    data:data
    
  }
  return (
    <div className="hide_tr">
      <div className="trends__search">
      <Form  onValuesChange={buttonState}>
       <Form.Item name="hhh" >
        <Input
          onChange={getData}
          id="searchbar"
          className="trend__control"
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