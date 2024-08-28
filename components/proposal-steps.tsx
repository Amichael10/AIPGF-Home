import { memo } from "react";
import TemplateSteps from "./template-steps";
import PropTypes from "prop-types";
import styles from "./proposal-steps.module.css";

const ProposalSteps = memo(({ className = "" }) => {
  return (
    <div className={[styles.proposalSteps, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.background}>
          <div className={styles.browseContent}>
            <div className={styles.browseContainer}>
              <div className={styles.div1}>01</div>
              <div className={styles.browseHeaderWrapper}>
                <div className={styles.browseHeader}>
                  <div className={styles.browseTitle}>
                    <b className={styles.browseIdeas}>Browse Ideas</b>
                    <div className={styles.lookAtExisting}>
                      Look at existing ideas that we are funding
                    </div>
                  </div>
                  <h2 className={styles.browseTheRfpsContainer}>
                    {`Browse the RFPs, and `}
                    <a
                      className={styles.ideas}
                      href="https://aipgf.com/ideas"
                      target="_blank"
                    >
                      <span className={styles.ideas1}>ideas</span>
                    </a>{" "}
                    list .
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.minusIcon}
            loading="lazy"
            alt=""
            src="/minus.svg"
          />
        </div>
      </div>
      <TemplateSteps
        templateSteps="02"
        draftProposal="Draft Proposal"
        templateHref="https://aipgf.com/template"
        template="template"
      />
      <TemplateSteps
        templateSteps="03"
        propMinWidth="76px"
        draftProposal="Get Feedback"
        propAlignSelf="stretch"
        templateHref="https://aipgf.com/telegram"
        template="telegram"
        templateStepsGap="20px"
        templateStepsWidth1="unset"
        draftProposalWidth="unset"
        draftYourProposalContainerWidth="unset"
      />
      <div className={styles.templateSteps}>
        <div className={styles.wrapper}>
          <a className={styles.a}>04</a>
        </div>
        <div className={styles.createOnChainProfileSubmParent}>
          <h1
            className={styles.createOnChainProfile}
          >{`Create On-Chain Profile  & Submit Proposal`}</h1>
          <div className={styles.createAnOnContainer}>
            <span>
              {`Create an on chain profile on NEAR and submit your proposal through the AI-PGF `}
            </span>
            <a
              className={styles.ideas}
              href="https://forum.aipgf.com"
              target="_blank"
            >
              <span>
                <span className={styles.ideas1}>Forum</span>
              </span>
            </a>
            <span>. Wait for feedback if revisions are needed.</span>
          </div>
        </div>
        <div className={styles.navigationPlus}>
          <img
            className={styles.plusIcon}
            loading="lazy"
            alt=""
            src="/plus.svg"
          />
        </div>
      </div>
      <div className={styles.templateSteps1}>
        <div className={styles.frameParent}>
          <div className={styles.container}>
            <a className={styles.a1}>05</a>
          </div>
          <div className={styles.kycPayoutsParent}>
            <h1 className={styles.kycPayouts}>{`KYC & Payouts`}</h1>
            <div className={styles.lookAtExisting}>
              <a
                className={styles.ideas}
                href="https://aipgf.com/kyc"
                target="_blank"
              >
                <span>
                  <span className={styles.ideas1}>KYC</span>
                </span>
              </a>
              <span>
                {" "}
                and get paid half you payment upfront and the other half upon
                completion. Report your milestone on same submission
              </span>
            </div>
          </div>
        </div>
        <div className={styles.plusWrapper}>
          <img
            className={styles.plusIcon}
            loading="lazy"
            alt=""
            src="/plus.svg"
          />
        </div>
      </div>
    </div>
  );
});

ProposalSteps.propTypes = {
  className: PropTypes.string,
};

export default ProposalSteps;
