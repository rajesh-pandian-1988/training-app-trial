import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface AddEntityModalProps {
  showAddEntityModal: boolean;
  setShowAddEntityModal: Function;
  entityName: string;
  entityModel: any;
  addEntity: Function;
}

export const AddEntityModal = (props: AddEntityModalProps) => {
  const {
    showAddEntityModal,
    setShowAddEntityModal,
    entityName,
    addEntity,
    entityModel,
  } = props;

  const [entity, setEntity] = useState(entityModel);

  const updateEntity = (key: any, value: any) => {
    setEntity((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Modal
        open={showAddEntityModal}
        onClose={() => setShowAddEntityModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {"Add " + entityName}
          </Typography>
          <Stack>
            {Object.keys(entity).map((key, index) => (
              <TextField
                key={index}
                sx={{ marginTop: "10px" }}
                id="outlined-basic"
                label={key.toUpperCase()}
                variant="outlined"
                value={entity[key]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  updateEntity(key, event.target.value);
                }}
              />
            ))}
            <Button
              sx={{ marginTop: "10px" }}
              variant="contained"
              endIcon={<AddIcon />}
              onClick={() => addEntity(entity)}
            >
              {"Save " + entityName}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
