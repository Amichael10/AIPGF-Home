import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./nav-bar.module.css";

const NavBar = memo(({ className = "" }) => {
  return (
    <header className={[styles.navBar, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <div className={styles.link}>
              <div className={styles.logoParent}>
                <div className={styles.logo1}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <div className={styles.frameChild} />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector-4.svg"
                    />
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
                <b className={styles.aiPgf}>AI-PGF</b>
              </div>
            </div>
          </div>
        </div>
        <nav className={styles.links}>
          <nav className={styles.linkWrapper}>
            <nav className={styles.navigation}>
              <div className={styles.nav}>
                <div className={styles.link1}>
                  <a className={styles.proposals}>Proposals</a>
                </div>
              </div>
              <div className={styles.nav}>
                <div className={styles.link2}>
                  <a className={styles.rfps}>RFPs</a>
                </div>
              </div>
              <div className={styles.nav}>
                <div className={styles.link3}>
                  <a className={styles.projects}>Projects</a>
                </div>
              </div>
              <div className={styles.nav}>
                <div className={styles.link4}>
                  <a className={styles.about}>About</a>
                </div>
              </div>
              <div className={styles.nav}>
                <div className={styles.link5}>
                  <a className={styles.ideas}>Ideas</a>
                </div>
              </div>
            </nav>
          </nav>
        </nav>
        <div className={styles.cta}>
          <div className={styles.list}>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <div className={styles.margin}>
                  <img className={styles.svgIcon} alt="" src="/svg.svg" />
                </div>
                <div className={styles.container1}>
                  <div className={styles.submitProposal}>Submit Proposal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

NavBar.propTypes = {
  className: PropTypes.string,
};

export default NavBar;
