import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./n-e-a-r-foundation.module.css";

const NEARFoundation = memo(({ className = "" }) => {
  const onNEARFoundation1ImageClick = useCallback(() => {
    window.open("https://near.foundation");
  }, []);

  return (
    <div className={[styles.nearfoundation1, className].join(" ")}>
      <img
        className={styles.nearfoundation1Icon}
        loading="lazy"
        alt=""
        src="/nearfoundation-1@2x.png"
        onClick={onNEARFoundation1ImageClick}
      />
      <h2 className={styles.a}>a</h2>
    </div>
  );
});

NEARFoundation.propTypes = {
  className: PropTypes.string,
};

export default NEARFoundation;
