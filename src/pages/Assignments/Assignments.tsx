import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { AddEntityButton } from "../../components/AddEntityButton/AddEntityButton";
import { AddEntityModal } from "../../components/AddEntityModal/AddEntityModal";
import { EntityTable } from "../../components/EntityTable/EntityTable";

const cols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "assignmentName",
    headerName: "Assignment name",
    width: 150,
    editable: true,
  },
  {
    field: "assignmentLanguage",
    headerName: "Language",
    width: 150,
    editable: true,
  },
  {
    field: "assignmentDuration",
    headerName: "Duration",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export const Assignments = () => {
  const [showAddEntityModal, setShowAddEntityModal] = useState(false);
  const [userRow, setUserRow] = useState<any>([]);
  const addUsers = (firstName: string, lastName: string, age: number) => {
    const userId = userRow.length + 1;
    const addUserRow = {
      id: userId,
      lastName: lastName,
      firstName: firstName,
      age: age,
    };
    setUserRow([...userRow, addUserRow]);
  };
  return (
    <Box>
      <Grid container direction="row" alignItems="stretch">
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom textAlign={"center"}>
            Users
          </Typography>
          <AddEntityButton
            name={"Add Users"}
            handleAddEntity={setShowAddEntityModal}
          />
          <EntityTable rows={userRow} cols={cols} />
        </Grid>
      </Grid>
    </Box>
  );
};
