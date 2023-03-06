
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Table = ({ data, columns }) => {
  return (
    <Box
      m='40px 0 0 0'
      height='75vh'
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row.id}
      />
    </Box>
  );
};

export default Table;
