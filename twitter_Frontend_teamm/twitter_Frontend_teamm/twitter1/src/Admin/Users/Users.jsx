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
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
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
  return (
    <div className="Users">
      <span className="Userstitle">Users List</span>
      <div style={{ height: 600, width: "100%"}}>
        <DataGrid rows={userlist} columns={columns} />
      </div>
    </div>
  );
}
