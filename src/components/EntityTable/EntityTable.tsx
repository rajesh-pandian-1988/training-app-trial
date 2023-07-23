import Box from "@mui/material/Box";
import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface EntityTableProps {
  rows: GridRowsProp[];
  cols: GridColDef[];
}

export const EntityTable = (props: EntityTableProps) => {
  const { rows, cols } = props;
  return (
    <Box sx={{ height: "1000px", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={cols}
        hideFooterPagination={true}
        getRowHeight={() => "auto"}
      />
    </Box>
  );
};
