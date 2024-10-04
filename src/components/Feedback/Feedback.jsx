import styles from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback, totalFeedback }) => {
  return (
    <div className={styles.feedbackItem}>
      <ul className={styles.feedbackList}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
      </ul>
      <p className={styles.feedbackI}>Total: {totalFeedback}</p>
      <p className={styles.feedbackI}>Positive: {positiveFeedback} %</p>
    </div>
  );
};

export default Feedback;
