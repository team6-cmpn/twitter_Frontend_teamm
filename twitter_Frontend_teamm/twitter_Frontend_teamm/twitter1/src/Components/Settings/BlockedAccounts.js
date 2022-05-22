import React from "react"
import Blocked from "./Blocked";
import { getBlockedUsers } from "../NotificationsMock";
import { Get_BlockedList } from "./SettingsBackendIntegration";
/**
 * make you able to see the blocked account
 * @returns [blocked account]
 */
const BlockedAccounts =() =>{
    const [BlockedUsers,setBlockedUsers]=React.useState([])
    document.title = "Blocked Accounts / Twitter";
    React.useEffect(()=>{
        (async () => {
            const resp = await getBlockedUsers();
            setBlockedUsers(resp);
          })();
    
        },[])
    let BE=[]
    BE=Get_BlockedList();
    return(

        <div className="settingsSubMenu">
                 <div className="SubMenuTitle">
                <span>Blocked accounts</span>
            </div>
            <div className="submenu_discription">
                <h3>When you block someone, that person won't be able to follow or message you, and you won't see notifications from them.</h3>
            </div>
            
            <hr/>
             {/* {BlockedUsers.map((BlockedUsers,index)=>(
                <Blocked key={index} BlockedAccount={BlockedUsers}/>))} */}
            {BE.map((BlockedUsers,index)=>(
                <Blocked key={index} BlockedAccount={BlockedUsers}/>))}

        </div>

    );
};

export default BlockedAccounts

