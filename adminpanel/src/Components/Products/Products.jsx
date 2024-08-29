import React, { useState } from "react";
import "./products.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link as Link } from "react-router-dom";
import { productsRows } from "./productdata";

function Products() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product", width: 200 },
    { field: "stock", headerName: "Stock", width: 200 },

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",

      renderCell: (params) => {
        return (
          <>
            <div className="action">
              <Link to={"/products/" + params.row.id}>
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
  const [data, setData] = useState(productsRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="products">
      <div>
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

export default Products;
