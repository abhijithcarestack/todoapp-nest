import { Container, Stack } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../../App";
import { UserContext } from "../../store/user-context";
import { useGetData } from "../../Utils/apiService";
import Spinner from "../../Utils/Spinner";
import ItemCard from "./ShoppingItem";

function ShoppingList() {
  const [toDoList, setToDoList] = useState([]);
  const { apiResponse, spinnerFlag } = useContext(Context);
  let { user, setUserDetails } = useContext(UserContext);
  const { getData } = useGetData(`user/${user.userId}`);

  useEffect(() => {
    async function fetchData() {
      let responsedata = await getData();
      const todoList = responsedata.toDoList;
      setToDoList(todoList);
      setUserDetails({
        firstName: responsedata.firstName,
        lastName: responsedata.lastName,
        email: responsedata.email,
      });
    }
    fetchData();
  }, [apiResponse, user]);

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2}>
          <h2>Shopping List</h2>
          {spinnerFlag && <Spinner />}
          {!spinnerFlag &&
            toDoList.map((item, index) => (
              <ItemCard
                key={item.id}
                itemNumber={index + 1}
                uniqueKey={item.id}
                item={item.description}
              />
            ))}
        </Stack>
      </Container>
    </>
  );
}

export default ShoppingList;
