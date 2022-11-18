import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/user-context";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userId") === null) navigate("/signin");
    else {
      let userId = JSON.parse(localStorage.getItem("userId"));
      setUser(userId);
    }
  }, []);
  return <>{children}</>;
}

export default ProtectedRoute;
