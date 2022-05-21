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
import { Link } from "react-router-dom";
/**
 *
 * this function returns a sortable datagrid that shows all the users in twitter
 * each coloumn can be sorted ascending or descending order according to
 * alphapitical orders of numbers as following count and followers count
 * in this grid you can also block user and unblock users
 * @returns
 */
//   useEffect(() => {
//     (async () => {
//       const resp = await GetDashBoard();
//       let temptweetsPerMonth = [...resp.data[9].tweets_Per_Month];
//       temptweetsPerMonth.forEach((element, index) => {
//         temptweetsPerMonth[index].month = element._id.month;
//       });
//       setTweetsPerMonth(temptweetsPerMonth);
//     })();
//   }, []);


const columns = [
  {
    title: "Avatar",
    field: "profile_image_url",
    headerName: "Image",
    sortable: false,
    renderCell: (params) => (
      <img
        style={{ width: 36, height: 36, borderRadius: "50%" }}
        src={params.value}
        alt="userimg"
      />
    ),
  },
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "UserName", width: 130 },
  { field: "followers_count", headerName: "Followers", width: 100 },
  { field: "followings_count", headerName: "Folllowing", width: 100 },
  {
    field: "admin_block",
    headerName: "Is Blocked",
    sortable: false,
    valueFormatter: ({ value }) => value.blocked_by_admin,
    cellClassName: "isblocked",
    type: "string",
    seed: "12",
    width: 120,
  },
  // {
  //   field: "admin_block",
  //   headerName: "Block Times",
  //   sortable:false,
  //   valueFormatter: ({ value }) => value?.blockNumTimes,
  //   cellClassName: 'blocktimes',
  //   type: "string",
  //   seed:'11',
  //   width: 120,
  // },
  { field: "dateOfBirth", headerName: "Date Of Birth", width: 110 },
  { field: "_id", headerName: "User ID", width: 110 },
  {
    field: "block",
    headerName: "Block",
    width: 70,
    sortable: false,
    renderCell: (params) => {
      return (
        <div>
          <div className="cellAction">
            <Link to="/BlockForm" style={{ textDecoration: "none" }}>
              <div className="viewButton">Block</div>
            </Link>
          </div>
        </div>
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
        if(resp.status===200){
          window.location.href="/Users"
        }
        localStorage.setItem("selectedIDs", null);
      };

      return (
        <div>
          <div className="deleteButton" onClick={() => unblock([])}>
            Unblock
          </div>
        </div>
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
          getRowClassName={(params) => `super-app-theme--${params.row.status}`}
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
