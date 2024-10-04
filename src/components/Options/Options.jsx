import styles from "./Options.module.css";

const Options = ({ oupdateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <ul className={styles.options}>
        <button
          onClick={() => oupdateFeedback("good")}
          className={styles.buttonOptions}
        >
          Good
        </button>
        <button
          onClick={() => oupdateFeedback("neutral")}
          className={styles.buttonOptions}
        >
          Neutral
        </button>
        <button
          onClick={() => oupdateFeedback("bad")}
          className={styles.buttonOptions}
        >
          Bad
        </button>
        {totalFeedback > 0 && (
          <button onClick={resetFeedback} className={styles.buttonOptions}>
            Reset
          </button>
        )}
      </ul>
    </div>
  );
};

export default Options;
