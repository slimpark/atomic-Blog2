import styles from "./Button.module.css";
import Proptypes from "prop-types";

Button.propTypes = {
  children: Proptypes.any,
  type: Proptypes.string,
  onClick: Proptypes.func,
};
function Button({ children, type, onClick }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
