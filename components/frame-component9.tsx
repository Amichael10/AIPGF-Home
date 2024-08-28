import { memo } from "react";
import Tag from "./tag";
import Proposal from "./proposal";
import PropTypes from "prop-types";
import styles from "./frame-component9.module.css";

const FrameComponent9 = memo(({ className = "" }) => {
  return (
    <div className={[styles.rowWrapper, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.proposal}>
          <div className={styles.proposalContent}>
            <div className={styles.proposalCardHeader}>
              <div className={styles.title}>
                <div className={styles.logo}>
                  <div className={styles.logo}>
                    <img
                      className={styles.monochromeRegularpngIcon}
                      loading="lazy"
                      alt=""
                      src="/monochrome-regularpng.svg"
                    />
                  </div>
                </div>
                <h2 className={styles.rfpProposalGenerator}>
                  RFP Proposal Generator
                </h2>
              </div>
              <img
                className={styles.proposalCardHeaderChild}
                alt=""
                src="/group-128983@2x.png"
              />
            </div>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. `}</div>
          </div>
          <div className={styles.byBorisnear2HoursAgoParent}>
            <div className={styles.byBorisnearContainer}>
              <b>{`By Boris.near `}</b>
              <span className={styles.span}>|</span>
              <b>{` `}</b>
              <span className={styles.span}>2 hours ago</span>
            </div>
            <div className={styles.proposalCardTags}>
              <div className={styles.tag}>
                <div className={styles.icon}>
                  <img
                    className={styles.pencilsimplelineIcon}
                    alt=""
                    src="/pencilsimpleline.svg"
                  />
                  <div className={styles.icon1} />
                </div>
                <div className={styles.text}>LLM</div>
              </div>
              <Tag />
            </div>
          </div>
        </div>
        <Proposal group12898="/group-128984@2x.png" />
        <Proposal group12898="/group-128985@2x.png" />
      </div>
    </div>
  );
});

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
