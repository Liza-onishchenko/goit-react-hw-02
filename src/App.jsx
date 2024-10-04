import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import styles from "./components/App.css/App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const val = localStorage.getItem("feedbackValue");
    return val ? JSON.parse(val) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedback);
    localStorage.setItem("feedbackValue", stringifiedValue);
  }, [feedback]);

  const oupdateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <Description />
      <Options
        oupdateFeedback={oupdateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
