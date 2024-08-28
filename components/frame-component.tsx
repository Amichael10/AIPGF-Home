import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = memo(({ className = "", group12898, propWidth }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <div className={styles.frameGroup}>
              <div className={styles.timeStampsWrapper}>
                <div className={styles.timeStamps} />
              </div>
              <h2 className={styles.deadProjectAgent}>Dead Project Agent</h2>
            </div>
          </div>
          <img className={styles.frameChild} alt="" src={group12898} />
        </div>
        <div className={styles.tagParent} style={frameDiv3Style}>
          <button className={styles.tag}>
            <div className={styles.icon}>
              <img className={styles.icon1} alt="" src="/icon.svg" />
              <div className={styles.icon2} />
            </div>
            <div className={styles.text}>Quick Start</div>
          </button>
          <div className={styles.tag1}>
            <img className={styles.icon3} />
            <div className={styles.text1}>MVP</div>
          </div>
        </div>
      </div>
    </div>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,
  group12898: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent;
