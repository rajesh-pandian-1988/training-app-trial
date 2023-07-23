import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { EntityTable } from "../../components/EntityTable/EntityTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { AddEntityButton } from "../../components/AddEntityButton/AddEntityButton";
import { AddEntityModal } from "../../components/AddEntityModal/AddEntityModal";
import {
  useAddUsersMutation,
  useGetUsersQuery,
} from "../../state/server/services/user";
import { UserData } from "../../models/userModels";

export const Users = () => {
  const [showAddEntityModal, setShowAddEntityModal] = useState(false);

  const { data, isLoading } = useGetUsersQuery("");
  const [addUsers] = useAddUsersMutation();

  const addUserData = (userData: UserData) => {
    const userId = getUsers(data).length + 1;
    const userRow: UserData = {
      ...userData,
      id: userId,
    };
    addUsers(userRow);
    setShowAddEntityModal(false);
  };

  const getUsers = (userItems: any) => {
    return userItems
      ? userItems.map((user: any) => ({
          id: user.id,
          lastName: user.lastName,
          firstName: user.firstName,
          gender: user.gender,
          email: user.email,
          phone: user.phone,
        }))
      : [];
  };

  const newUser: any = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
  };

  const cols: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      width: 90,
    },
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
      editable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 2,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

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
          <EntityTable rows={isLoading ? [] : getUsers(data)} cols={cols} />
          <AddEntityModal
            showAddEntityModal={showAddEntityModal}
            setShowAddEntityModal={setShowAddEntityModal}
            entityName={"Users"}
            addEntity={addUserData}
            entityModel={newUser}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
