import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./eligibiltyassesment.module.css";

const Eligibiltyassesment = memo(({ className = "" }) => {
  return (
    <div
      className={[styles.eligibilityAssesment01Wrapper, className].join(" ")}
    >
      <div className={styles.eligibilityAssesment01}>
        <div className={styles.agentDetailsParent}>
          <div className={styles.agentDetails}>
            <h1 className={styles.eligibilityAssesmentAgent}>
              Eligibility Assesment Agent
            </h1>
            <div className={styles.uiwreloadWrapper}>
              <img
                className={styles.uiwreloadIcon}
                alt=""
                src="/uiwreload.svg"
              />
            </div>
          </div>
          <h3 className={styles.theAiWill}>
            The AI will do an assessment of the project's eligibility against
            the criteria you provide.
          </h3>
        </div>
        <textarea
          className={styles.eligibilityAssesment01Child}
          rows={14}
          cols={60}
        />
        <div className={styles.eligibilityButton}>
          <button className={styles.button}>
            <div className={styles.border} />
            <a
              className={styles.checkEligibility}
              href="https://t.me/EligibilityAIPGFBot"
              target="_blank"
            >
              Check Eligibility
            </a>
          </button>
          <button className={styles.button1}>
            <div className={styles.border1} />
            <b className={styles.attachFile}>Attach file</b>
          </button>
        </div>
      </div>
    </div>
  );
});

Eligibiltyassesment.propTypes = {
  className: PropTypes.string,
};

export default Eligibiltyassesment;
