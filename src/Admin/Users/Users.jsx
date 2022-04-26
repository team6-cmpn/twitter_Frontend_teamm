import React from "react";
import "./users.css";
import { GridActionsCellItem } from "@mui/x-data-grid";
import BlockIcon from "@material-ui/icons/Block";
import { DataGrid } from "@mui/x-data-grid";
import { GetUserList } from "../MockRegistrationAdmin";

const columns = [
  {
    title: 'Avatar',
    field: 'avatar',
    headerName:"Image",
    sortable: false,
    renderCell: (params) => (
      <img
        style={{ width:36 ,height: 36, borderRadius: '50%' }}
        src={params.value}
        alt="userimg"
      />
    ),
  },
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "UserName", width: 130 },
  { field: "followers", headerName: "Followers", width: 130 },
  { field: "dateOfBirth", headerName: "Date Of Birth", width: 130 },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Block Icon",
    type: "actions",
    description: "This icon will block the user",
    width: 100,
    getActions: () => [
      <GridActionsCellItem icon={<BlockIcon />} label="Block"/>,
    ],
  },
];



export default function AdminUsers() {
  const userlist=GetUserList()
  console.log(userlist._id)
  return (
    <div className="Users">
      <span className="Userstitle">Users List</span>
      <div style={{ height: 600, width: "100%"}}>
        <DataGrid getRowId={userlist => userlist._id} rows={userlist} columns={columns} />
      </div>
    </div>
  );
}
