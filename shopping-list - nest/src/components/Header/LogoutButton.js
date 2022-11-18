import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";

function LogoutButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("userId");
    navigate("/signin");
  };
  return (
    <>
      <button className={styles["language-select"]} onClick={handleClick}>
        Logout
      </button>
    </>
  );
}

export default LogoutButton;
