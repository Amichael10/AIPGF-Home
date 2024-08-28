import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./button-base.module.css";

const ButtonBase = memo(({ className = "" }) => {
  return (
    <div className={[styles.buttonBase, className].join(" ")}>
      <img className={styles.telegramlogoIcon} alt="" src="/telegramlogo.svg" />
      <a
        className={styles.text}
        href="https://aipgf.com/telegram"
        target="_blank"
      >
        Join Now
      </a>
    </div>
  );
});

ButtonBase.propTypes = {
  className: PropTypes.string,
};

export default ButtonBase;
