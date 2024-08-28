import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./projecttag.module.css";

const Projecttag = memo(({ className = "" }) => {
  return (
    <div className={[styles.tag, className].join(" ")}>
      <div className={styles.icon}>
        <img
          className={styles.solarcrownBrokenIcon}
          alt=""
          src="/solarcrownbroken.svg"
        />
        <div className={styles.icon1} />
      </div>
      <div className={styles.text}>MVP</div>
    </div>
  );
});

Projecttag.propTypes = {
  className: PropTypes.string,
};

export default Projecttag;
