import React from "react"
import { Link, useLocation, Outlet } from "react-router-dom";
import Muted from "./Muted"
import { getMutedUsers } from "../NotificationsMock";
import { Get_MutedList } from "./SettingsBackendIntegration";
/**
 * make you able yo see the muted accounts 
 * @returns [show you the muted accounts]
 */
const MutedAccounts =() =>{
    const [MutedUsers,setMutedUsers]=React.useState([])
    document.title = "Muted Accounts / Twitter";
    const [location] = React.useState(useLocation().pathname);
    React.useEffect(()=>{
        (async () => {
            const resp = await getMutedUsers();
            setMutedUsers(resp);
          })();
    
        },[])
    let BE=[]
    BE=Get_MutedList();
    return(

        <div className="settingsSubMenu">
                 <div className="SubMenuTitle">
                <span>Muted accounts</span>
            </div>
            <div className="submenu_discription">
                <h3>Here's everyone you muted. You can add or remove them from this list.</h3>
            </div>
            
            <hr/>
            <br></br>
            {/* {MutedUsers.map((MutedUsers,index)=>(
                <Muted key={index} MutedAccount={MutedUsers}/>))} */}
            {BE.map((MutedUsers,index)=>(
                <Muted key={index} MutedAccount={MutedUsers}/>))}

        </div>

    );
};

export default MutedAccounts

