import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./tag.module.css";

const Tag = memo(({ className = "" }) => {
  return (
    <div className={[styles.tag, className].join(" ")}>
      <div className={styles.icon}>
        <img
          className={styles.pencilsimplelineIcon}
          alt=""
          src="/pencilsimpleline.svg"
        />
        <div className={styles.icon1} />
      </div>
      <input className={styles.text} placeholder="Proposal" type="text" />
    </div>
  );
});

Tag.propTypes = {
  className: PropTypes.string,
};

export default Tag;
