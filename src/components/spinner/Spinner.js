import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.css";

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <p>Loading...</p>
      {/* <FaSpinner className={styles.spinning} size={60} /> */}
    </div>
  );
}
