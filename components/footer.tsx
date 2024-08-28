import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = memo(({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footer1}>
        <div className={styles.socials}>
          <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
          <img className={styles.socialIcon} alt="" src="/vector-7.svg" />
          <img className={styles.socialIcon1} alt="" src="/vector-8.svg" />
        </div>
        <div className={styles.fundingStack}>
          <div className={styles.partOfThe}>Part of the </div>
          <img
            className={styles.potlockIcon}
            loading="lazy"
            alt=""
            src="/-potlock-1.svg"
          />
          <div className={styles.openFundingStack}>open funding stack</div>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.emailCapture}>
            <div className={styles.inputField}>
              <div className={styles.inputFieldBase}>
                <div className={styles.inputFieldBase}>
                  <div className={styles.label}>Email</div>
                  <div className={styles.input}>
                    <input
                      className={styles.content}
                      placeholder="Subscribe to Newsletter"
                      type="text"
                    />
                    <img
                      className={styles.helpIcon}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
            </div>
            <button className={styles.tag}>
              <div className={styles.button}>
                <div className={styles.text}>Subscribe</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
