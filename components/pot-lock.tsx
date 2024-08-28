import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./pot-lock.module.css";

const PotLock = memo(({ className = "" }) => {
  const onPotLockContainerClick = useCallback(() => {
    window.open("https://potlock.org");
  }, []);

  return (
    <div
      className={[styles.potlock, className].join(" ")}
      onClick={onPotLockContainerClick}
    >
      <img
        className={styles.potlockIcon}
        loading="lazy"
        alt=""
        src="/-potlock.svg"
      />
      <h2 className={styles.a}>a</h2>
    </div>
  );
});

PotLock.propTypes = {
  className: PropTypes.string,
};

export default PotLock;
