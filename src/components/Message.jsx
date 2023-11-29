import styles from "./Message.module.css";
import PropTypes from "prop-types";

Message.propTypes = {
  message: PropTypes.string,
  id: PropTypes.object,
};

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
