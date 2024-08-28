import { memo } from "react";
import Link from "./link";
import PropTypes from "prop-types";
import styles from "./grant-portals.module.css";

const GrantPortals = memo(({ className = "" }) => {
  return (
    <div className={[styles.grantPortals, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.portalLinkItems}>
          <div className={styles.link}>
            <div className={styles.coa2p26tftcz9cdq40fyggu2wqpng}>
              <img
                className={styles.sparkleIcon}
                loading="lazy"
                alt=""
                src="/sparkle@2x.png"
              />
              <div className={styles.firstSparklesRowParent}>
                <div className={styles.firstSparklesRow}>
                  <div className={styles.firstSparklesColumn}>
                    <div className={styles.firstSparklesColumnInner}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.frameChild} />
                        <div className={styles.frameChild} />
                      </div>
                    </div>
                    <div className={styles.firstSparklesColumnChild} />
                  </div>
                  <div className={styles.firstSparklesRowInner}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.frameChild1} />
                    </div>
                  </div>
                  <div className={styles.firstSparklesRowInner}>
                    <textarea
                      className={styles.rectangleTextarea}
                      rows={5}
                      cols={10}
                    />
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameChild2} />
                  </div>
                </div>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameChild3} />
                </div>
              </div>
              <img
                className={styles.sparkleElementIcon}
                alt=""
                src="/sparkle-element@2x.png"
              />
              <div className={styles.secondSparklesRow}>
                <img
                  className={styles.sparkleElementsIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1410068538-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.container1}>
              <div className={styles.container2}>
                <div className={styles.container3}>
                  <div className={styles.heading3}>
                    <h1 className={styles.grantAgentPortal}>
                      Grant Agent Portal + Playground
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.container4}>
                <h2 className={styles.empoweringProjectsWith}>
                  Empowering projects with timely funding and support for
                  sustainable growth through AI-driven decision making.
                </h2>
              </div>
            </div>
          </div>
          <Link
            coaptftcZcDqfYGgUwQpng="/coa2p26tftcz9cdq40fyggu2wqpng.svg"
            fundingInnovationCommunity="Funding Innovation Community"
            joinACollaborativeEcosystem="Join a collaborative ecosystem fostering innovative funding solutions through AI-powered automation."
          />
        </div>
        <div className={styles.portalLinkItems1}>
          <Link
            coaptftcZcDqfYGgUwQpng="/coa2p26tftcz9cdq40fyggu2wqpng-1@2x.png"
            propPadding="0px 0px 0px"
            propFlex="unset"
            propAlignSelf="unset"
            fundingInnovationCommunity="Proactive Grants Program"
            propTextDecoration="unset"
            joinACollaborativeEcosystem="Empowering projects with timely funding and support for sustainable growth through AI-driven decision making without interference."
            containerWidth="unset"
            heading3Width="unset"
            heading3FlexDirection="column"
            heading3Position="unset"
            fundingInnovationCommunityWidth="unset"
            fundingInnovationCommunityMargin="0"
            fundingInnovationCommunityPosition="relative"
            fundingInnovationCommunityTop="unset"
            fundingInnovationCommunityLeft="unset"
            containerHeight="unset"
            joinACollaborativeHeight="unset"
          />
          <Link
            coaptftcZcDqfYGgUwQpng="/coa2p26tftcz9cdq40fyggu2wqpng-2.svg"
            propPadding="0px 32px 0px 0px"
            propFlex="1"
            propAlignSelf="stretch"
            fundingInnovationCommunity="Funding Artificial General Intelligence(AGI)"
            propTextDecoration="unset"
            joinACollaborativeEcosystem="Building intelligent systems (AGIs) capable of automating the entire grant funding lifecycle, from proposal evaluation to resource allocation."
            containerWidth="unset"
            heading3Width="unset"
            heading3FlexDirection="column"
            heading3Position="unset"
            fundingInnovationCommunityWidth="unset"
            fundingInnovationCommunityMargin="0"
            fundingInnovationCommunityPosition="relative"
            fundingInnovationCommunityTop="unset"
            fundingInnovationCommunityLeft="unset"
            containerHeight="unset"
            joinACollaborativeHeight="unset"
          />
        </div>
      </div>
    </div>
  );
});

GrantPortals.propTypes = {
  className: PropTypes.string,
};

export default GrantPortals;
