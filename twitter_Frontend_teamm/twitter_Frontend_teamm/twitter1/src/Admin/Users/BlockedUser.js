import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GetDashBoardstat } from "../MockRegistrationAdmin";
import "./blockform.css";

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
    headerName: "Block Times",
    sortable: false,
    valueFormatter: ({ value }) => value.blockNumTimes,
    type: "string",
    width: 120,
  },
  { field: "dateOfBirth", headerName: "Date Of Birth", width: 110 },
  { field: "_id", headerName: "User ID", width: 130 },
];

export default function BlockedUser() {
  const Blocklist = GetDashBoardstat()[13]?.top_Five_Blocked_Users;
  console.log("users", Blocklist);
  return (
    <div className="Users">
      <span className="Userstitle">Top Five Blocked Users</span>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(Blocklist) => Blocklist._id}
          rows={Blocklist}
          columns={columns}
        />
      </div>
    </div>
  );
}
