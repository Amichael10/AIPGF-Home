import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./template-steps.module.css";

const TemplateSteps = memo(
  ({
    className = "",
    propWidth,
    propGap,
    propPadding,
    templateSteps,
    propMinWidth,
    propGap1,
    propMinWidth1,
    draftProposal,
    propAlignSelf,
    templateHref,
    template,
    templateStepsGap,
    templateStepsHeight,
    templateStepsHeight1,
    templateStepsWidth,
    templateStepsWidth1,
    templateStepHeight,
    templateStepWidth,
    draftProposalWidth,
    draftYourProposalContainerWidth,
  }) => {
    const templateStepsStyle = useMemo(() => {
      return {
        minWidth: propMinWidth,
        width: templateStepsWidth1,
      };
    }, [propMinWidth, templateStepsWidth1]);

    const draftYourProposalContainerStyle = useMemo(() => {
      return {
        alignSelf: propAlignSelf,
        width: draftYourProposalContainerWidth,
      };
    }, [propAlignSelf, draftYourProposalContainerWidth]);

    const templateSteps1Style = useMemo(() => {
      return {
        gap: templateStepsGap,
      };
    }, [templateStepsGap]);

    const draftProposalStyle = useMemo(() => {
      return {
        width: draftProposalWidth,
      };
    }, [draftProposalWidth]);

    return (
      <div
        className={[styles.templateSteps, className].join(" ")}
        style={templateSteps1Style}
      >
        <div className={styles.container}>
          <div className={styles.draftContainer}>
            <div className={styles.hidden}>
              <div className={styles.templateSteps1} style={templateStepsStyle}>
                {templateSteps}
              </div>
            </div>
            <div className={styles.proposalStep}>
              <h1 className={styles.draftProposal} style={draftProposalStyle}>
                {draftProposal}
              </h1>
              <div
                className={styles.draftYourProposalContainer}
                style={draftYourProposalContainerStyle}
              >
                <span>{`Draft your proposal with this `}</span>
                <a
                  className={styles.template}
                  href={templateHref}
                  target="_blank"
                >
                  <span>
                    <span className={styles.template1}>{template}</span>
                  </span>
                </a>
                <span>
                  . Make sure to join the community telegram to get feedback
                </span>
              </div>
            </div>
          </div>
          <div className={styles.navigationIcons}>
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
  }
);

TemplateSteps.propTypes = {
  className: PropTypes.string,
  templateSteps: PropTypes.string,
  draftProposal: PropTypes.string,
  templateHref: PropTypes.string.isRequired,
  template: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propGap1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  templateStepsGap: PropTypes.any,
  templateStepsHeight: PropTypes.any,
  templateStepsHeight1: PropTypes.any,
  templateStepsWidth: PropTypes.any,
  templateStepsWidth1: PropTypes.any,
  templateStepHeight: PropTypes.any,
  templateStepWidth: PropTypes.any,
  draftProposalWidth: PropTypes.any,
  draftYourProposalContainerWidth: PropTypes.any,
};

export default TemplateSteps;
