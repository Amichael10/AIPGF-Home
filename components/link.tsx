import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./link.module.css";

const Link = memo(
  ({
    className = "",
    coaptftcZcDqfYGgUwQpng,
    propPadding,
    propFlex,
    propAlignSelf,
    fundingInnovationCommunity,
    propTextDecoration,
    joinACollaborativeEcosystem,
    containerWidth,
    heading3Width,
    heading3FlexDirection,
    heading3Position,
    fundingInnovationCommunityWidth,
    fundingInnovationCommunityMargin,
    fundingInnovationCommunityPosition,
    fundingInnovationCommunityTop,
    fundingInnovationCommunityLeft,
    containerHeight,
    joinACollaborativeHeight,
  }) => {
    const containerStyle = useMemo(() => {
      return {
        padding: propPadding,
      };
    }, [propPadding]);

    const container1Style = useMemo(() => {
      return {
        flex: propFlex,
        width: containerWidth,
      };
    }, [propFlex, containerWidth]);

    const heading3Style = useMemo(() => {
      return {
        alignSelf: propAlignSelf,
        width: heading3Width,
        flexDirection: heading3FlexDirection,
        position: heading3Position,
      };
    }, [propAlignSelf, heading3Width, heading3FlexDirection, heading3Position]);

    const fundingInnovationCommunityStyle = useMemo(() => {
      return {
        textDecoration: propTextDecoration,
        width: fundingInnovationCommunityWidth,
        margin: fundingInnovationCommunityMargin,
        position: fundingInnovationCommunityPosition,
        top: fundingInnovationCommunityTop,
        left: fundingInnovationCommunityLeft,
      };
    }, [
      propTextDecoration,
      fundingInnovationCommunityWidth,
      fundingInnovationCommunityMargin,
      fundingInnovationCommunityPosition,
      fundingInnovationCommunityTop,
      fundingInnovationCommunityLeft,
    ]);

    const container2Style = useMemo(() => {
      return {
        height: containerHeight,
      };
    }, [containerHeight]);

    const joinACollaborativeStyle = useMemo(() => {
      return {
        height: joinACollaborativeHeight,
      };
    }, [joinACollaborativeHeight]);

    return (
      <div className={[styles.link, className].join(" ")}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <img
              className={styles.coa2p26tftcz9cdq40fyggu2wqpngIcon}
              loading="lazy"
              alt=""
              src={coaptftcZcDqfYGgUwQpng}
            />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3} style={containerStyle}>
            <div className={styles.container4} style={container1Style}>
              <div className={styles.heading3} style={heading3Style}>
                <h1
                  className={styles.fundingInnovationCommunity}
                  style={fundingInnovationCommunityStyle}
                >
                  {fundingInnovationCommunity}
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.container5} style={container2Style}>
            <h2
              className={styles.joinACollaborative}
              style={joinACollaborativeStyle}
            >
              {joinACollaborativeEcosystem}
            </h2>
          </div>
        </div>
      </div>
    );
  }
);

Link.propTypes = {
  className: PropTypes.string,
  coaptftcZcDqfYGgUwQpng: PropTypes.string,
  fundingInnovationCommunity: PropTypes.string,
  joinACollaborativeEcosystem: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propTextDecoration: PropTypes.any,
  containerWidth: PropTypes.any,
  heading3Width: PropTypes.any,
  heading3FlexDirection: PropTypes.any,
  heading3Position: PropTypes.any,
  fundingInnovationCommunityWidth: PropTypes.any,
  fundingInnovationCommunityMargin: PropTypes.any,
  fundingInnovationCommunityPosition: PropTypes.any,
  fundingInnovationCommunityTop: PropTypes.any,
  fundingInnovationCommunityLeft: PropTypes.any,
  containerHeight: PropTypes.any,
  joinACollaborativeHeight: PropTypes.any,
};

export default Link;
