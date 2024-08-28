import { memo } from "react";
import ButtonBase from "./button-base";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = memo(({ className = "" }) => {
  return (
    <div className={[styles.button, className].join(" ")}>
      <ButtonBase />
    </div>
  );
});

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
