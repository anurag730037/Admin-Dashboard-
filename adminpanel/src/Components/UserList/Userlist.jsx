import React from "react";
import "./userlist.css";
import { useState } from "react";
import { rows } from "./Userdata";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link as Link } from "react-router-dom";

function Userlist() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",

      renderCell: (params) => {
        return (
          <>
            <div className="action">
              <Link to={"/users/" + params.row.id}>
                <button className="useristedit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </div>
          </>
        );
      },
    },
  ];

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className="userList">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          disableRowSelectionOnClick
          pageSizeOptions={8}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Userlist;
