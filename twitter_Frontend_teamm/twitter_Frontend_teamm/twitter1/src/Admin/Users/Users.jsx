import React from "react";
import "./users.css";
import BlockIcon from "@material-ui/icons/Block";
import { DataGrid } from "@mui/x-data-grid";
import {
  BLocking,
  GetDashBoardstat,
  GetUserList,
  UnBLockUser,
} from "../MockRegistrationAdmin";
import BlockForm from "./BlockForm";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Configure from "../../Configure";

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
const getBlock = (params) => params.getValue(params.id, "admin_block");
const getUserImg = (params) => params.getValue(params.id, "profile_image_url");
const columns = [
  {
    title: "Avatar",
    field: "User_img",
    headerName: "Image",
    sortable: false,
    renderCell: (params) => (
      <img
        style={{ width: 36, height: 36, borderRadius: "50%" }}
        src={`${Configure.backURL}${getUserImg(params)}`}
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
  {
    field: "Number Block",
    headerName: "Blocked Times",
    width: 110,
    renderCell: (params) => {
      return (
        <div className="blockedtimes">
            {getBlock(params).blockNumTimes}
        </div>
      );
    },
  },
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
            {getBlock(params).blocked_by_admin === false ? (
              <Link to="/BlockForm" style={{ textDecoration: "none" }}>
                <div className="viewButton">Block</div>
              </Link>
            ) : null}
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
      function Unblock() {
        const resp = UnBLockUser([]);
        console.log("unblocked res", resp);
        // const navigate = useNavigate();
        resp.then(function (result) {
          console.log("result", result);
          // istest(result);
          if (result.status === 200) {
            console.log("final test", result.status);
            window.location.href = "/Users";
          }
        });
        localStorage.setItem("selectedIDs", null);
      }

      return (
        <div>
          {getBlock(params).blocked_by_admin === true ? (
            <div
              className="deleteButton"
              onClick={() => {
                Unblock();
              }}
            >
              Unblock
            </div>
          ) : null}
        </div>
      );
    },
  },
];

export default function AdminUsers() {
  const userlist = GetUserList();

  const [selectedRows, setSelectedRows] = React.useState([]);

  console.log("users", userlist);
  return (
    <div className="Users">
      <span className="Userstitle">Users List</span>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          getRowId={(userlist) => userlist._id}
          rows={userlist}
          checkboxSelection
          columns={columns}
          onCellFocusOut={(e) => console.log(e.admin_block)}
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
