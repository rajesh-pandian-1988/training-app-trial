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
  modalHeading: string;
  addUsers: Function;
}

export const AddEntityModal = (props: AddEntityModalProps) => {
  const { showAddEntityModal, setShowAddEntityModal, modalHeading, addUsers } =
    props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

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
            {modalHeading}
          </Typography>
          <Stack>
            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(event.target.value);
              }}
            />
            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLastName(event.target.value);
              }}
            />
            <TextField
              sx={{ marginTop: "10px" }}
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAge(event.target.value);
              }}
            />
            <Button
              sx={{ marginTop: "10px" }}
              variant="contained"
              endIcon={<AddIcon />}
              onClick={() => addUsers(firstName, lastName, age)}
            >
              {"Save User"}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
