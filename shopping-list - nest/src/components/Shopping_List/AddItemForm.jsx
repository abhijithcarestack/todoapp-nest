import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Grid,
  Stack,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { Context } from "../../App";
import { usePostData, usePatchData } from "../../Utils/apiService";
import { UserContext } from "../../store/user-context";

function AddItemList() {
  const { editState, setEditState } = useContext(Context);
  const [inputFieldState, setInputFieldState] = useState();
  const { user } = useContext(UserContext);
  let { postData } = usePostData(`todo`);
  let { patchData } = usePatchData(`todo`);

  const addItemToList = async (value) => {
    try {
      await postData({ description: value, userId: user.userId });
    } catch (e) {}
  };

  const editItemInList = async (id, value) => {
    await patchData(id, { description: value });
  };

  useEffect(() => {
    if (editState) {
      setInputFieldState(editState.textFieldValue);
    } else setInputFieldState("");
  }, [editState]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const itemValue = data.get("newItem");

    if (editState) {
      editItemInList(editState.uniqueKey, itemValue);
    } else {
      addItemToList(itemValue);
    }
    setEditState(null);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" marginTop={5}>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <InputLabel>{editState ? "Edit Item" : "Add new item"}</InputLabel>
            <TextField
              value={inputFieldState}
              onChange={(e) => setInputFieldState(e.target.value)}
              name="newItem"
              type="text"
            />
            <Button type="submit" variant="contained">
              {editState ? "Save" : "Submit"}
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}

export default AddItemList;
