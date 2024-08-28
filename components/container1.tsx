import { memo, useCallback } from "react";
import Button from "./button";
import PropTypes from "prop-types";
import styles from "./container1.module.css";

const Container1 = memo(({ className = "" }) => {
  const onActionsClick = useCallback(() => {
    window.open("https://aipgf.com/telegram");
  }, []);

  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.testimonialWrapper}>
        <div className={styles.communityContent}>
          <div className={styles.communityContentChild} />
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.avatarContainer}>
              <div className={styles.avatarContainerChild} />
              <div className={styles.avatarGroupParent}>
                <div className={styles.avatarGroup}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className={styles.avatarIcon1}
                    loading="lazy"
                    alt=""
                    src="/avatar-1@2x.png"
                  />
                  <img
                    className={styles.avatarIcon2}
                    alt=""
                    src="/avatar-2@2x.png"
                  />
                </div>
                <div className={styles.communityInfo}>
                  <div className={styles.headingAndSupportingText}>
                    <h1 className={styles.heading}>Still have questions?</h1>
                    <h1 className={styles.supportingText}>
                      Can’t find the answer you’re looking for? Join our
                      Telegram Chat
                    </h1>
                  </div>
                  <button className={styles.actions} onClick={onActionsClick}>
                    <Button />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
