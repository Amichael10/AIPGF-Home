import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./button1.module.css";

const Button1 = memo(
  ({
    className = "",
    propPadding,
    cancel,
    propMinWidth,
    propTextDecoration,
    cancelWidth,
  }) => {
    const buttonStyle = useMemo(() => {
      return {
        padding: propPadding,
      };
    }, [propPadding]);

    const cancelStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
        textDecoration: propTextDecoration,
        width: cancelWidth,
      };
    }, [propMinWidth, propTextDecoration, cancelWidth]);

    return (
      <button
        className={[styles.button, className].join(" ")}
        style={buttonStyle}
      >
        <div className={styles.cancel} style={cancelStyle}>
          {cancel}
        </div>
      </button>
    );
  }
);

Button1.propTypes = {
  className: PropTypes.string,
  cancel: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  cancelWidth: PropTypes.any,
};

export default Button1;
