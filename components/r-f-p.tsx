import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./r-f-p.module.css";

const RFP = memo(
  ({
    className = "",
    propHeight,
    propPadding,
    group12898,
    propWidth,
    propHeight1,
    propPadding1,
    propPadding2,
  }) => {
    const proposalCardContentStyle = useMemo(() => {
      return {
        height: propHeight,
        padding: propPadding,
      };
    }, [propHeight, propPadding]);

    const proposalTagsStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const container3Style = useMemo(() => {
      return {
        padding: propPadding2,
      };
    }, [propPadding2]);

    return (
      <div className={[styles.rfp, className].join(" ")}>
        <div
          className={styles.proposalCardContent}
          style={proposalCardContentStyle}
        >
          <div className={styles.proposalCardContent1}>
            <div className={styles.proposalContent}>
              <div className={styles.title}>
                <div className={styles.proposalTitleContent}>
                  <div className={styles.container}>
                    <div className={styles.proposalStatus} />
                  </div>
                  <h2 className={styles.deadProjectAgent}>
                    Dead Project Agent
                  </h2>
                </div>
              </div>
              <img
                className={styles.proposalContentChild}
                alt=""
                src={group12898}
              />
            </div>
            <div className={styles.proposalTags} style={proposalTagsStyle}>
              <button className={styles.tag}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon.svg" />
                  <div className={styles.icon2} />
                </div>
                <div className={styles.text}>Quick Start</div>
              </button>
              <div className={styles.tag1}>
                <div className={styles.icon}>
                  <img
                    className={styles.solarcrownBrokenIcon}
                    loading="lazy"
                    alt=""
                    src="/solarcrownbroken.svg"
                  />
                  <div className={styles.icon2} />
                </div>
                <div className={styles.text1}>MVP</div>
              </div>
            </div>
          </div>
          <div className={styles.linkParent}>
            <div className={styles.link}>
              <div className={styles.container}>
                <div className={styles.containerWrapper}>
                  <div className={styles.container1}>
                    <div className={styles.container2}>
                      <div className={styles.buttonUpvote1}>
                        <div className={styles.upvoteButton}>
                          <img
                            className={styles.pencilsimplelineIcon}
                            loading="lazy"
                            alt=""
                            src="/icon-1.svg"
                          />
                          <div className={styles.margin}>
                            <div className={styles.container3}>
                              <div className={styles.upvoteCount}>1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.byBorisnearContainer}>
                    <b>{`By Boris.near `}</b>
                    <span className={styles.span}>|</span>
                    <b>{` `}</b>
                    <span className={styles.span}>2 hours ago</span>
                  </div>
                </div>
              </div>
              <div className={styles.link2}>
                <div className={styles.anOpenSource}>
                  An open source agent that checks checks a project forward
                  facing accounts (socials, github , etc) to determine if a
                  project is dead. This can be used as a tool to filter inactive
                  projects, but also for dilligencing teams on project
                  application/fundraising ask
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.submissionWrapper}>
                <div className={styles.submission}>
                  <div className={styles.submissionDeadline}>
                    Submission Deadline
                  </div>
                  <div className={styles.april1520241200AmUtcParent}>
                    <b className={styles.april152024}>
                      April 15, 2024, 12:00 AM UTC
                    </b>
                    <div className={styles.whitespace}>
                      <div className={styles.whitespaceChild} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.proposalVote}>
                <div className={styles.proposalVote1}>
                  <div className={styles.engagementButtons}>
                    <div className={styles.container4} style={container3Style}>
                      <div className={styles.button}>
                        <div className={styles.icon6}>
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
                      <div className={styles.container5}>
                        <div className={styles.button}>
                          <div className={styles.icon6}>
                            <img
                              className={styles.icon1}
                              loading="lazy"
                              alt=""
                              src="/icon-3.svg"
                            />
                          </div>
                          <div className={styles.voteCount}>
                            <b className={styles.replies}>3 replies</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tag2}>
                    <div className={styles.icon10}>
                      <img
                        className={styles.pencilsimplelineIcon}
                        alt=""
                        src="/pencilsimpleline.svg"
                      />
                      <div className={styles.icon11} />
                    </div>
                    <div className={styles.text2}>Accepting Application</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

RFP.propTypes = {
  className: PropTypes.string,
  group12898: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propPadding1: PropTypes.any,
  propPadding2: PropTypes.any,
};

export default RFP;
