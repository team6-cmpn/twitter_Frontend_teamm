import React from "react";
import "./users.css";
import BlockIcon from "@material-ui/icons/Block";
import { DataGrid } from "@mui/x-data-grid";
import {
  GetDashBoardstat,
  GetUserList,
  UnBLockUser,
} from "../MockRegistrationAdmin";
import BlockForm from "./BlockForm";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect } from "react";
/**
 * 
 * this function returns a sortable datagrid that shows all the users in twitter
 * each coloumn can be sorted ascending or descending order according to 
 * alphapitical orders of numbers as following count and followers count
 * in this grid you can also block user and unblock users
 * @returns 
 */

const columns = [
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "UserName", width: 130 },
  { field: "followers_count", headerName: "Followers", width: 130 },
  { field: "followings_count", headerName: "Folllowing", width: 130 },
  { field: "dateOfBirth", headerName: "Date Of Birth", width: 130 },
  { field: "isDeactivated", headerName: "Deactivation Status", width: 130 },
  { field: "_id", headerName: "User ID", width: 130 },
  {
    field: "block",
    headerName: "Block",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        return (
          <div>
            <BlockForm />
          </div>
        );
      };

      return (
        <a href="BlockForm" onClick={onClick}>
          <BlockIcon />
        </a>
      );
    },
  },
  {
    field: "action",
    headerName: "Uncblock",
    sortable: false,
    renderCell: (params) => {
      const unblock = (e) => {
        var resp = UnBLockUser();
        console.log("unblocked res", resp);
        localStorage.setItem("selectedIDs", null);
        e.preventDefault(); //prevent refresh of page
        // const userlistafterblocking = GetUserList();
        // console.log("users after blocking",userlistafterblocking )
      };

      return (
        <a onClickCapture={unblock}>
          <CheckCircleOutlineIcon />
        </a>
      );
    },
  },
];

export default function AdminUsers() {
  const userlist = GetUserList();
  const [selectedRows, setSelectedRows] = React.useState([]);

  console.log("users", userlist);
  const [isblocked, setIsBlock] = React.useState([]);

  useEffect(() => {
    (async () => {
      const resp = await GetUserList();
      let tempisblocked = [...resp.data[3].users_Per_Month];
      tempisblocked.forEach((element, index) => {
        tempisblocked[index].isblocked = element.admin_block.blocked_by_admin;
      });
      setIsBlock(tempisblocked);
    })();
  }, []);
  return (
    <div className="Users">
      <span className="Userstitle">Users List</span>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          getRowId={(userlist) => userlist._id}
          rows={userlist}
          checkboxSelection
          columns={columns}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            setSelectedRows(selectedIDs);
            Set.prototype.lastValue = function () {
              return [...this.values()].pop();
            };
            var lastValue = selectedIDs.lastValue();
            console.log("selected id", selectedIDs);
            // var val = [...selectedIDs].filter(x => x.hasOwnProperty('first'))[0]['first'];
            localStorage.setItem("selectedIDs", lastValue);
          }}
          {...userlist}
        />
      </div>
    </div>
  );
}
// getRowId={userlist => userlist._id}
