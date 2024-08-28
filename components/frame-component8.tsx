import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component8.module.css";

const FrameComponent8 = memo(({ className = "", propHeight, propPadding }) => {
  const frameDiv4Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv4Style}
    >
      <div className={styles.frameGroup}>
        <div className={styles.buttonUpvote1Wrapper}>
          <div className={styles.buttonUpvote1}>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon-1.svg"
              />
              <div className={styles.margin}>
                <div className={styles.container}>
                  <div className={styles.votePlaceholders}>1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.byBorisnearContainer}>
          <b>{`By Boris.near `}</b>
          <span className={styles.span}>|</span>
          <b>{` `}</b>
          <span className={styles.span}>2 hours ago</span>
        </div>
      </div>
      <div className={styles.link}>
        <div className={styles.anOpenSource}>
          An open source agent that checks checks a project forward facing
          accounts (socials, github , etc) to determine if a project is dead.
          This can be used as a tool to filter inactive projects, but also for
          dilligencing teams on project application/fundraising ask
        </div>
      </div>
      <div className={styles.submissionDeadlineParent}>
        <div className={styles.submissionDeadline}>Submission Deadline</div>
        <b className={styles.april152024}>April 15, 2024, 12:00 AM UTC</b>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
});

FrameComponent8.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent8;
