import { memo, useMemo } from "react";
import Projecttag from "./projecttag";
import PropTypes from "prop-types";
import styles from "./r-f-p1.module.css";

const RFP1 = memo(({ className = "", group12898, propWidth, propPadding }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const container4Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.rfp, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.titleParent}>
              <div className={styles.title}>
                <div className={styles.frameContainer}>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.frameChild} />
                  </div>
                  <h2 className={styles.deadProjectAgent}>
                    Dead Project Agent
                  </h2>
                </div>
              </div>
              <img className={styles.frameItem} alt="" src={group12898} />
            </div>
            <div className={styles.tagParent} style={frameDiv5Style}>
              <button className={styles.tag}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon.svg" />
                  <div className={styles.icon2} />
                </div>
                <div className={styles.text}>Quick Start</div>
              </button>
              <Projecttag />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.buttonUpvote1Wrapper}>
              <div className={styles.buttonUpvote1}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.pencilsimplelineIcon}
                    loading="lazy"
                    alt=""
                    src="/icon-1.svg"
                  />
                  <div className={styles.margin}>
                    <div className={styles.container}>
                      <div className={styles.div}>1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.byBorisnearContainer}>
              <b>{`By Boris.near `}</b>
              <span className={styles.span}>|</span>
              <b>{` `}</b>
              <span className={styles.span}>2 hours ago</span>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.anOpenSource}>
              An open source agent that checks checks a project forward facing
              accounts (socials, github , etc) to determine if a project is
              dead. This can be used as a tool to filter inactive projects, but
              also for dilligencing teams on project application/fundraising ask
            </div>
          </div>
          <div className={styles.submissionDeadlineParent}>
            <div className={styles.submissionDeadline}>Submission Deadline</div>
            <b className={styles.april152024}>April 15, 2024, 12:00 AM UTC</b>
            <div className={styles.frameInner} />
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent2}>
            <div className={styles.containerWrapper}>
              <div className={styles.container1} style={container4Style}>
                <div className={styles.button}>
                  <div className={styles.icon4}>
                    <img
                      className={styles.icon1}
                      loading="lazy"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                  <div className={styles.voteCount}>
                    <b className={styles.proposals}>3 Proposals</b>
                  </div>
                </div>
                <div className={styles.container2}>
                  <div className={styles.button}>
                    <div className={styles.icon4}>
                      <img className={styles.icon1} alt="" src="/icon-3.svg" />
                    </div>
                    <div className={styles.voteCount}>
                      <b className={styles.replies}>3 replies</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tag1}>
              <img
                className={styles.pencilsimplelineIcon}
                alt=""
                src="/pencilsimpleline.svg"
              />
              <div className={styles.icon8} />
              <div className={styles.text1}>Accepting Application</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

RFP1.propTypes = {
  className: PropTypes.string,
  group12898: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default RFP1;
