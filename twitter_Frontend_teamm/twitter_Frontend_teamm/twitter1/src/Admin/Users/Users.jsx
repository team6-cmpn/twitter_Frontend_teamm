import React from "react";
import "./users.css";
import { GridActionsCellItem } from "@mui/x-data-grid";
import BlockIcon from "@material-ui/icons/Block";
import { DataGrid } from "@mui/x-data-grid";
import { GetUserList, GetUserListMock } from "../MockRegistrationAdmin";
import { GridColDef, GridApi } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import BlockForm from "./BlockForm";
import { useEffect } from "react";

const columns = [
  {
    title: "Avatar",
    field: "avatar",
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
  { field: "followers_count", headerName: "Followers", width: 130 },
  { field: "followings_count", headerName: "Folllowing", width: 130 },
  { field: "dateOfBirth", headerName: "Date Of Birth", width: 130 },
  { field: "isDeactivated", headerName: "Deactivation Status", width: 150 },
  { field: "_id", headerName: "User ID", width: 150 },
  {
    field: "action",
    headerName: "Action",
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
            console.log(selectedIDs);
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
