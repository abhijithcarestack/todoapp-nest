import { useContext } from "react";
import { UserContext } from "../../store/user-context";
import styles from "./Header.module.css";
import LogoutButton from "./LogoutButton";
function Header() {
  const { userDetails } = useContext(UserContext);
  return (
    <>
      <div className={styles.header}>
        <span className={styles.welcome}>
          {`Welcome ${userDetails.firstName} ${userDetails.lastName}`}{" "}
        </span>
        <LogoutButton />
      </div>
    </>
  );
}

export default Header;
