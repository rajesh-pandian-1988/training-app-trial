import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { EntityTable } from "../../components/EntityTable/EntityTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { AddEntityButton } from "../../components/AddEntityButton/AddEntityButton";
import { AddEntityModal } from "../../components/AddEntityModal/AddEntityModal";

const cols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
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

interface UserRow {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}

export const Users = () => {
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
          <AddEntityModal
            showAddEntityModal={showAddEntityModal}
            setShowAddEntityModal={setShowAddEntityModal}
            modalHeading={"Add Users"}
            addUsers={addUsers}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
