import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div>
      <p className={styles.notification}>{message}</p>
    </div>
  );
};

export default Notification;
