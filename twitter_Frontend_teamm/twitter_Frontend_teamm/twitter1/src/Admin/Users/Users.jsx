import React from "react";
import "./users.css";
import { GridActionsCellItem } from "@mui/x-data-grid";
import BlockIcon from "@material-ui/icons/Block";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    title: 'Avatar',
    field: 'avatar',
    headerName:"Image",
    sortable: false,
    renderCell: (params) => (
      <img
        style={{ height: 36, borderRadius: '50%' }}
        src={params.value}
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
      <GridActionsCellItem icon={<BlockIcon />} label="Block" />,
    ],
  },
];

const rows = [
  {
    id: 1,
    lastName: "Mahmoud",
    firstName: "Jon",
    age: 35,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },

  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },  {
    id: 1,
    lastName: "Mahmoud",
    firstName: "Jon",
    age: 35,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },

  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    avatar:
      "https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9983UR9VWakAX8wAiMY&_nc_ht=scontent.fcai19-3.fna&oh=00_AT8sowWMEAmmjJXHMsJKBcYmQPOlqgeEcy3ACWMx-hyY5Q&oe=625BBD5B",
  },
];

export default function AdminUsers() {
  return (
    <div className="Users">
      <span className="UsersTitle">Users List</span>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={6} />
      </div>
    </div>
  );
}
