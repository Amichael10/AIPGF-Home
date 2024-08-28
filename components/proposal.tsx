import { memo } from "react";
import Tag from "./tag";
import PropTypes from "prop-types";
import styles from "./proposal.module.css";

const Proposal = memo(({ className = "", group12898 }) => {
  return (
    <div className={[styles.proposal, className].join(" ")}>
      <div className={styles.titleParent}>
        <div className={styles.title}>
          <img className={styles.logoIcon} />
          <h2 className={styles.rfpProposalGenerator}>
            RFP Proposal Generator
          </h2>
        </div>
        <img className={styles.frameChild} alt="" src={group12898} />
      </div>
      <div className={styles.link}>
        <div className={styles.link1}>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. `}</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.link2}>
          <div className={styles.byBorisnearContainer}>
            <b>{`By Boris.near `}</b>
            <span className={styles.span}>|</span>
            <b>{` `}</b>
            <span className={styles.span}>2 hours ago</span>
          </div>
        </div>
      </div>
      <div className={styles.proposalMetadataWrapper}>
        <div className={styles.proposalMetadata}>
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
  );
});

Proposal.propTypes = {
  className: PropTypes.string,
  group12898: PropTypes.string,
};

export default Proposal;
