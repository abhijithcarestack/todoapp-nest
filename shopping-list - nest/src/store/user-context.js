import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
let userData = undefined;
function UserContextProvider({ children }) {
  if (localStorage.getItem("userId")) {
    userData = JSON.parse(localStorage.getItem("userId"));
  }
  const [user, setUser] = useState(userData);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <UserContext.Provider
      value={{ user, setUser, userDetails, setUserDetails }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
