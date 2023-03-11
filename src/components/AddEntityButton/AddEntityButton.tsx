import Button from "@mui/material/Button";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

interface AddEntityProps {
  name: string;
  handleAddEntity: Function;
}
export const AddEntityButton = (props: AddEntityProps) => {
  const { name, handleAddEntity } = props;
  return (
    <Button
      variant="contained"
      endIcon={<AddIcon />}
      onClick={() => handleAddEntity(true)}
    >
      {name}
    </Button>
  );
};
