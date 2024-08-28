import { memo } from "react";
import RFP from "./r-f-p";
import FrameComponent from "./frame-component";
import FrameComponent8 from "./frame-component8";
import RFP1 from "./r-f-p1";
import PropTypes from "prop-types";
import styles from "./project-list.module.css";

const ProjectList = memo(({ className = "" }) => {
  return (
    <div className={[styles.projectList, className].join(" ")}>
      <RFP group12898="/group-12898@2x.png" />
      <div className={styles.rfp}>
        <div className={styles.frameParent}>
          <FrameComponent group12898="/group-128981@2x.png" />
          <FrameComponent8 />
          <div className={styles.frameWrapper}>
            <div className={styles.engagementElementsParent}>
              <div className={styles.engagementElements}>
                <div className={styles.container}>
                  <div className={styles.button}>
                    <div className={styles.icon}>
                      <img className={styles.icon1} alt="" src="/icon-2.svg" />
                    </div>
                    <div className={styles.voteCount}>
                      <b className={styles.proposals}>3 Proposals</b>
                    </div>
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.button}>
                      <div className={styles.icon}>
                        <img
                          className={styles.icon1}
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
              <div className={styles.tag}>
                <img
                  className={styles.pencilsimplelineIcon}
                  alt=""
                  src="/pencilsimpleline.svg"
                />
                <div className={styles.icon4} />
                <div className={styles.editValue}>Accepting Application</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rfp1}>
        <div className={styles.frameParent}>
          <FrameComponent group12898="/group-128982@2x.png" propWidth="269px" />
          <FrameComponent8 propHeight="178.5px" propPadding="0px 0px 60.5px" />
          <div className={styles.frameContainer}>
            <div className={styles.engagementElementsParent}>
              <div className={styles.engagementElements}>
                <div className={styles.container2}>
                  <div className={styles.button}>
                    <div className={styles.icon}>
                      <img className={styles.icon1} alt="" src="/icon-2.svg" />
                    </div>
                    <div className={styles.voteCount}>
                      <b className={styles.proposals}>3 Proposals</b>
                    </div>
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.button}>
                      <div className={styles.icon}>
                        <img
                          className={styles.icon1}
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
              <div className={styles.tag1}>
                <img
                  className={styles.pencilsimplelineIcon}
                  alt=""
                  src="/pencilsimpleline.svg"
                />
                <div className={styles.icon4} />
                <input
                  className={styles.text}
                  placeholder="Accepting Application"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RFP1 group12898="/group-12898@2x.png" />
      <RFP1
        group12898="/group-128981@2x.png"
        propWidth="270px"
        propPadding="0px 9px 0px 0px"
      />
      <div className={styles.rfp}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <div className={styles.titleParent}>
                <div className={styles.title}>
                  <div className={styles.frameParent3}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameChild} />
                    </div>
                    <h2 className={styles.deadProjectAgent}>
                      Dead Project Agent
                    </h2>
                  </div>
                </div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-128982@2x.png"
                />
              </div>
              <div className={styles.tagParent}>
                <button className={styles.tag2}>
                  <div className={styles.icon10}>
                    <img className={styles.icon1} alt="" src="/icon.svg" />
                    <div className={styles.icon12} />
                  </div>
                  <div className={styles.text1}>Quick Start</div>
                </button>
                <div className={styles.tag3}>
                  <div className={styles.icon10}>
                    <img
                      className={styles.solarcrownBrokenIcon}
                      alt=""
                      src="/solarcrownbroken.svg"
                    />
                    <div className={styles.icon12} />
                  </div>
                  <div className={styles.text2}>MVP</div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent8 propHeight="unset" propPadding="unset" />
          <div className={styles.frameWrapper}>
            <div className={styles.engagementElementsParent}>
              <div className={styles.engagementElements}>
                <div className={styles.container2}>
                  <div className={styles.button}>
                    <div className={styles.icon}>
                      <img className={styles.icon1} alt="" src="/icon-2.svg" />
                    </div>
                    <div className={styles.voteCount}>
                      <b className={styles.proposals}>3 Proposals</b>
                    </div>
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.button}>
                      <div className={styles.icon}>
                        <img
                          className={styles.icon1}
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
              <div className={styles.tag1}>
                <img
                  className={styles.pencilsimplelineIcon}
                  alt=""
                  src="/pencilsimpleline.svg"
                />
                <div className={styles.icon4} />
                <input
                  className={styles.text}
                  placeholder="Accepting Application"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectList.propTypes = {
  className: PropTypes.string,
};

export default ProjectList;
